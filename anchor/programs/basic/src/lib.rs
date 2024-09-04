use anchor_lang::prelude::*;

mod instructions;
mod state;
use instructions::*;


declare_id!("GWXyCZ7pBNkVXzcKBEEHJSu5WPj64Nx64R4XjNmfsjyA");

#[program]
pub mod anchortradeit {
    use super::*;

    pub fn CreateTournament(ctx: Context<CreateTournament>,seed: u128, entry_fee: u64, initial_paper_money: u32, max_num_of_players: u16, start_time: i64, end_time: i64 ) -> Result<()> {
        ctx.accounts.create_tournament(seed, entry_fee, initial_paper_money, max_num_of_players, start_time, end_time, &ctx.bumps)?;
        Ok(())
    }
}

