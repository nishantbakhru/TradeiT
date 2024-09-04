// use anchor_lang::prelude::*;
// use crate::state::*;


// #[derive(Accounts)]
// // #[instruction(seed: u128)]
// pub struct JoinTournament<'info>{
//     #[account(mut)]
//     pub signer: Signer<'info>,
//     #[account(mut, seeds = [b"player_account", signer.key().as_ref()], payer = signer, space = 8 + player_account::INIT_SPACE, bump)]
//     pub player_account: Account<'info, player_account>,
//     #[account( 
//     seeds = [b"config", signer.key().as_ref(), seed.to_le_bytes()],
//     init,
//     payer = signer,
//     space = 8 + player_account::INIT_SPACE,
//     bump)]
//     pub config: SystemAccount<'info, config>,
//     pub system_program: Program<'info, System>
// }

// impl<'info> JoinTournament<'info>{
//     pub fn create_tournament(&mut self, entry_fee: u64, initial_paper_money: u64, max_num_of_players: u16, start_time: i64, end_time: i64, bumps:&CreateTournamentBumps) -> Result<()> {
//         self.config.set_inner(config {
//             player: self.player.key(),
//             pub max_num_of_players: max_num_of_players,
//             pub initial_paper_money: initial_paper_money,        
//             pub entry_fee: entry_fee,    
//             pub bump: bumps.config,
//             pub start_time: start_time,
//             pub end_time: end_time,
//             pub num_of_player_joined: max_num_of_players,
//             // pub resolver: Pubkey,
//         });

//         let cpi_program = self.system_program.to_account_info();

//         let cpi_accounts = Transfer {
//             from: self.signer.to_account_info(),
//             to: self.config.to_account_info(),
//         };

//         let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);

//         transfer(cpi_ctx, entry_fee)

//         Ok(())
//     }
// }
