use anchor_lang::prelude::*;

declare_id!("DZCahLrnTPRcsjnhoaxkqBj8e2xy1oquRiXjUadcTQzx");

#[program]
pub mod tradeit_1 {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
