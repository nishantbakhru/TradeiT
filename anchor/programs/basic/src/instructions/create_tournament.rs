// accounts: this will act as vault :config(vault), 
// player_account, signer, 
// program : system program

// impl

// transfer

// paper_money( from config to player_account)

use anchor_lang::{prelude::*, system_program::{transfer, Transfer}};
use crate::state::*;


#[derive(Accounts)]
#[instruction(seed: u128)]
pub struct CreateTournament<'info>{
    #[account(mut)]
    pub signer: Signer<'info>,
    
    #[account(         
    seeds = [b"config", signer.key().as_ref(), seed.to_le_bytes().as_ref()],
    init,
    payer = signer,
    space = 8 + Config::INIT_SPACE,
    bump)]
    pub config: Account<'info, Config>,

    #[account( 
    seeds = [b"player_account", signer.key().as_ref(),config.key().as_ref()],
    init,
    payer = signer, 
    space = 8 + PlayerAccount::INIT_SPACE,
    bump)]
    pub player_account: Account<'info, PlayerAccount>,
    
    pub system_program: Program<'info, System>,
}

impl<'info> CreateTournament<'info>{
    pub fn create_tournament(&mut self, seed: u128, entry_fee: u64, initial_paper_money: u32, max_num_of_players: u16, start_time: i64, end_time: i64, bumps:&CreateTournamentBumps) -> Result<()> {
        self.config.set_inner(Config {
            seed,
            max_num_of_players,
            initial_paper_money,        
            entry_fee,    
            bump: bumps.config,
            start_time,
            end_time,
            num_of_player_joined: max_num_of_players,
            // pub resolver: Pubkey,
        });

        self.player_account.set_inner(PlayerAccount {
            player: self.signer.key(),
            paper_money: initial_paper_money,
            bump: bumps.player_account,
            is_winner: false,
        });

        let cpi_program = self.system_program.to_account_info();

        let cpi_accounts = Transfer {
            from: self.signer.to_account_info(),
            to: self.config.to_account_info(),
        };

        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);

        transfer(cpi_ctx, entry_fee);

        

        Ok(())
    }
}

