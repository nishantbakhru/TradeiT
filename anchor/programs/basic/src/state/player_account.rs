use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)] // You need to add the 8 bytes for the anchor account discriminator upon account init
pub struct PlayerAccount {
    pub player: Pubkey,
    // pub seed: u128,
    pub paper_money: u32, 
    pub bump: u8,
    pub is_winner: bool,
}

// impl player_account {
//     pub fn to_slice(&self) -> Vec<u8> {
//         let mut s = self.player.to_bytes().to_vec();
//         s.extend_from_slice(&self.seed.to_le_bytes());
//         s.extend_from_slice(&self.paper_money.to_le_bytes());
//         s.extend_from_slice(&self.bump.to_le_bytes());
//         s.extend_from_slice(&self.is_winner.to_le_bytes());
//         s
//     }
// }


// create_tournament(seed: string(creator/signer pubkey, tournamanent pubkey))

// Join_tournament


// Macro 1
// pub struct test ( only applies macro 1 to first struct after it)


