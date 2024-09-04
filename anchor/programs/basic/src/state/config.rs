use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)] // You need to add the 8 bytes for the anchor account discriminator upon account init
pub struct Config {
    pub max_num_of_players: u16,
    pub initial_paper_money: u32,
    pub seed: u128,
    pub entry_fee: u64,    
    pub bump: u8,
    pub start_time: i64,
    pub end_time: i64,
    pub num_of_player_joined: u16,
    // pub resolver: Pubkey,
}

// Backend
// Tournament Id
// Walletaddress : paper_money

// when time is up, trigger reslove, ( wallet address)