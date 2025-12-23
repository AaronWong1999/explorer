// Data Generator for edgeX Explorer
// Supports both Perpetuals (Perp) and Spot trading
// Based on edgeX: https://pro.edgex.exchange

// ============================================
// PERPETUAL TRADING PAIRS (合约交易对)
// Format: XXXUSD (settled in USDC)
// ============================================
const PERP_PAIRS = [
    // Major Coins
    { symbol: 'BTCUSD', basePrice: 104500, decimals: 2, sizeDecimals: 4, market: 'perp' },
    { symbol: 'ETHUSD', basePrice: 3850, decimals: 2, sizeDecimals: 3, market: 'perp' },
    { symbol: 'SOLUSD', basePrice: 223, decimals: 2, sizeDecimals: 2, market: 'perp' },
    { symbol: 'BNBUSD', basePrice: 715, decimals: 2, sizeDecimals: 3, market: 'perp' },
    { symbol: 'XRPUSD', basePrice: 2.51, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'ADAUSD', basePrice: 1.05, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'DOGEUSD', basePrice: 0.42, decimals: 5, sizeDecimals: 0, market: 'perp' },
    { symbol: 'AVAXUSD', basePrice: 51, decimals: 2, sizeDecimals: 2, market: 'perp' },
    { symbol: 'DOTUSD', basePrice: 9.8, decimals: 3, sizeDecimals: 1, market: 'perp' },
    { symbol: 'TRXUSD', basePrice: 0.27, decimals: 5, sizeDecimals: 0, market: 'perp' },
    { symbol: 'LINKUSD', basePrice: 28, decimals: 3, sizeDecimals: 1, market: 'perp' },
    { symbol: 'MATICUSD', basePrice: 0.98, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'LTCUSD', basePrice: 118, decimals: 2, sizeDecimals: 2, market: 'perp' },
    { symbol: 'BCHUSD', basePrice: 485, decimals: 2, sizeDecimals: 3, market: 'perp' },
    { symbol: 'ATOMUSD', basePrice: 12.5, decimals: 3, sizeDecimals: 1, market: 'perp' },
    // L2 & Infra
    { symbol: 'ARBUSD', basePrice: 1.85, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'OPUSD', basePrice: 2.95, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'APTUSD', basePrice: 14.5, decimals: 3, sizeDecimals: 1, market: 'perp' },
    { symbol: 'SUIUSD', basePrice: 4.25, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'SEIUSD', basePrice: 0.85, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'TIAUSD', basePrice: 8.5, decimals: 3, sizeDecimals: 1, market: 'perp' },
    { symbol: 'INJUSD', basePrice: 38, decimals: 2, sizeDecimals: 2, market: 'perp' },
    { symbol: 'STXUSD', basePrice: 2.15, decimals: 4, sizeDecimals: 0, market: 'perp' },
    // DeFi
    { symbol: 'UNIUSD', basePrice: 17.5, decimals: 3, sizeDecimals: 1, market: 'perp' },
    { symbol: 'AABORAUSD', basePrice: 380, decimals: 2, sizeDecimals: 3, market: 'perp' },
    { symbol: 'MKRUSD', basePrice: 1850, decimals: 2, sizeDecimals: 4, market: 'perp' },
    { symbol: 'LDOUSD', basePrice: 2.45, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'CRVUSD', basePrice: 1.12, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'COMPUSD', basePrice: 85, decimals: 2, sizeDecimals: 2, market: 'perp' },
    { symbol: 'SNXUSD', basePrice: 3.8, decimals: 3, sizeDecimals: 1, market: 'perp' },
    // AI & Gaming
    { symbol: 'RENDERUSD', basePrice: 9.5, decimals: 3, sizeDecimals: 1, market: 'perp' },
    { symbol: 'FETUSD', basePrice: 2.8, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'TAOUSD', basePrice: 580, decimals: 2, sizeDecimals: 3, market: 'perp' },
    { symbol: 'IMXUSD', basePrice: 2.1, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'SANDUSD', basePrice: 0.72, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'AXSUSD', basePrice: 9.2, decimals: 3, sizeDecimals: 1, market: 'perp' },
    // Meme & Trending
    { symbol: 'PEPEUSD', basePrice: 0.0000235, decimals: 10, sizeDecimals: 0, market: 'perp' },
    { symbol: 'WIFUSD', basePrice: 3.45, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'BONKUSD', basePrice: 0.000045, decimals: 9, sizeDecimals: 0, market: 'perp' },
    { symbol: 'FLOKIUSD', basePrice: 0.00025, decimals: 8, sizeDecimals: 0, market: 'perp' },
    { symbol: 'SHIBUSD', basePrice: 0.000028, decimals: 9, sizeDecimals: 0, market: 'perp' },
    // RWA & New
    { symbol: 'ONDOUSD', basePrice: 1.92, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'ENAUSD', basePrice: 1.15, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'JUPUSD', basePrice: 1.25, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'WUSD', basePrice: 0.38, decimals: 4, sizeDecimals: 0, market: 'perp' },
    { symbol: 'PYTHUSD', basePrice: 0.52, decimals: 4, sizeDecimals: 0, market: 'perp' },
];

// ============================================
// SPOT TRADING PAIRS (现货交易对)
// Format: XXX/USDC (base/quote)
// ============================================
const SPOT_PAIRS = [
    // Major
    { symbol: 'BTC/USDC', basePrice: 104500, decimals: 2, sizeDecimals: 6, market: 'spot', base: 'BTC', quote: 'USDC' },
    { symbol: 'ETH/USDC', basePrice: 3850, decimals: 2, sizeDecimals: 4, market: 'spot', base: 'ETH', quote: 'USDC' },
    { symbol: 'SOL/USDC', basePrice: 223, decimals: 2, sizeDecimals: 2, market: 'spot', base: 'SOL', quote: 'USDC' },
    { symbol: 'BNB/USDC', basePrice: 715, decimals: 2, sizeDecimals: 3, market: 'spot', base: 'BNB', quote: 'USDC' },
    { symbol: 'XRP/USDC', basePrice: 2.51, decimals: 4, sizeDecimals: 0, market: 'spot', base: 'XRP', quote: 'USDC' },
    { symbol: 'ADA/USDC', basePrice: 1.05, decimals: 4, sizeDecimals: 0, market: 'spot', base: 'ADA', quote: 'USDC' },
    { symbol: 'DOGE/USDC', basePrice: 0.42, decimals: 5, sizeDecimals: 0, market: 'spot', base: 'DOGE', quote: 'USDC' },
    { symbol: 'AVAX/USDC', basePrice: 51, decimals: 2, sizeDecimals: 2, market: 'spot', base: 'AVAX', quote: 'USDC' },
    // L2 & Infra
    { symbol: 'ARB/USDC', basePrice: 1.85, decimals: 4, sizeDecimals: 1, market: 'spot', base: 'ARB', quote: 'USDC' },
    { symbol: 'OP/USDC', basePrice: 2.95, decimals: 4, sizeDecimals: 1, market: 'spot', base: 'OP', quote: 'USDC' },
    { symbol: 'SUI/USDC', basePrice: 4.25, decimals: 4, sizeDecimals: 1, market: 'spot', base: 'SUI', quote: 'USDC' },
    { symbol: 'APT/USDC', basePrice: 14.5, decimals: 3, sizeDecimals: 2, market: 'spot', base: 'APT', quote: 'USDC' },
    { symbol: 'SEI/USDC', basePrice: 0.85, decimals: 4, sizeDecimals: 0, market: 'spot', base: 'SEI', quote: 'USDC' },
    { symbol: 'TIA/USDC', basePrice: 8.5, decimals: 3, sizeDecimals: 1, market: 'spot', base: 'TIA', quote: 'USDC' },
    // DeFi
    { symbol: 'LINK/USDC', basePrice: 28, decimals: 3, sizeDecimals: 2, market: 'spot', base: 'LINK', quote: 'USDC' },
    { symbol: 'UNI/USDC', basePrice: 17.5, decimals: 3, sizeDecimals: 2, market: 'spot', base: 'UNI', quote: 'USDC' },
    { symbol: 'AAVE/USDC', basePrice: 380, decimals: 2, sizeDecimals: 3, market: 'spot', base: 'AAVE', quote: 'USDC' },
    { symbol: 'LDO/USDC', basePrice: 2.45, decimals: 4, sizeDecimals: 1, market: 'spot', base: 'LDO', quote: 'USDC' },
    { symbol: 'MKR/USDC', basePrice: 1850, decimals: 2, sizeDecimals: 4, market: 'spot', base: 'MKR', quote: 'USDC' },
    { symbol: 'CRV/USDC', basePrice: 1.12, decimals: 4, sizeDecimals: 0, market: 'spot', base: 'CRV', quote: 'USDC' },
    // AI & Gaming
    { symbol: 'RENDER/USDC', basePrice: 9.5, decimals: 3, sizeDecimals: 1, market: 'spot', base: 'RENDER', quote: 'USDC' },
    { symbol: 'FET/USDC', basePrice: 2.8, decimals: 4, sizeDecimals: 0, market: 'spot', base: 'FET', quote: 'USDC' },
    { symbol: 'IMX/USDC', basePrice: 2.1, decimals: 4, sizeDecimals: 0, market: 'spot', base: 'IMX', quote: 'USDC' },
    // Meme
    { symbol: 'PEPE/USDC', basePrice: 0.0000235, decimals: 10, sizeDecimals: 0, market: 'spot', base: 'PEPE', quote: 'USDC' },
    { symbol: 'WIF/USDC', basePrice: 3.45, decimals: 4, sizeDecimals: 0, market: 'spot', base: 'WIF', quote: 'USDC' },
    { symbol: 'BONK/USDC', basePrice: 0.000045, decimals: 9, sizeDecimals: 0, market: 'spot', base: 'BONK', quote: 'USDC' },
    { symbol: 'SHIB/USDC', basePrice: 0.000028, decimals: 9, sizeDecimals: 0, market: 'spot', base: 'SHIB', quote: 'USDC' },
    // New & RWA
    { symbol: 'JUP/USDC', basePrice: 1.25, decimals: 4, sizeDecimals: 0, market: 'spot', base: 'JUP', quote: 'USDC' },
    { symbol: 'ONDO/USDC', basePrice: 1.92, decimals: 4, sizeDecimals: 0, market: 'spot', base: 'ONDO', quote: 'USDC' },
    { symbol: 'ENA/USDC', basePrice: 1.15, decimals: 4, sizeDecimals: 0, market: 'spot', base: 'ENA', quote: 'USDC' },
    { symbol: 'W/USDC', basePrice: 0.38, decimals: 4, sizeDecimals: 0, market: 'spot', base: 'W', quote: 'USDC' },
];

// Combined pairs for backwards compatibility
const TRADING_PAIRS = [...PERP_PAIRS, ...SPOT_PAIRS];

// ============================================
// COMPREHENSIVE TRANSACTION TYPES
// Based on Hyperliquid + Lighter research
// ============================================
const TX_TYPES = [
    // ========== PERPETUAL TRADING (合约交易) ==========
    { type: 'perpTrade', label: 'Perp Trade', category: 'perp', weight: 25, icon: '📈', market: 'perp' },
    { type: 'perpOrder', label: 'Perp Order', category: 'perp', weight: 15, icon: '📝', market: 'perp' },
    { type: 'perpCancel', label: 'Perp Cancel', category: 'perp', weight: 8, icon: '❌', market: 'perp' },
    { type: 'perpCancelByCloid', label: 'Cancel by ClOID', category: 'perp', weight: 3, icon: '🔖', market: 'perp' },
    { type: 'perpCancelAll', label: 'Cancel All Orders', category: 'perp', weight: 1, icon: '🚫', market: 'perp' },
    { type: 'perpModify', label: 'Perp Modify', category: 'perp', weight: 4, icon: '✏️', market: 'perp' },
    { type: 'perpBatchModify', label: 'Batch Modify', category: 'perp', weight: 1.5, icon: '📑', market: 'perp' },
    { type: 'perpTwap', label: 'Perp TWAP', category: 'perp', weight: 2, icon: '⏱️', market: 'perp' },
    { type: 'perpTwapCancel', label: 'Cancel TWAP', category: 'perp', weight: 0.5, icon: '⏹️', market: 'perp' },
    { type: 'scheduleCancel', label: 'Schedule Cancel', category: 'perp', weight: 0.5, icon: '⏰', market: 'perp' },
    
    // ========== SPOT TRADING (现货交易) ==========
    { type: 'spotTrade', label: 'Spot Trade', category: 'spot', weight: 15, icon: '💱', market: 'spot' },
    { type: 'spotOrder', label: 'Spot Order', category: 'spot', weight: 10, icon: '📋', market: 'spot' },
    { type: 'spotCancel', label: 'Spot Cancel', category: 'spot', weight: 5, icon: '✖️', market: 'spot' },
    { type: 'spotCancelByCloid', label: 'Cancel by ClOID', category: 'spot', weight: 1.5, icon: '🔖', market: 'spot' },
    { type: 'spotCancelAll', label: 'Cancel All Orders', category: 'spot', weight: 0.5, icon: '🚫', market: 'spot' },
    { type: 'spotModify', label: 'Spot Modify', category: 'spot', weight: 2, icon: '📝', market: 'spot' },
    { type: 'spotBatchModify', label: 'Batch Modify', category: 'spot', weight: 0.8, icon: '📑', market: 'spot' },
    
    // ========== LIQUIDATION (清算 - 仅合约) ==========
    { type: 'liquidation', label: 'Liquidation', category: 'liquidation', weight: 3, icon: '⚠️', market: 'perp' },
    { type: 'adl', label: 'Auto-Deleverage', category: 'liquidation', weight: 1, icon: '🔻', market: 'perp' },
    
    // ========== FUNDING (资金费 - 仅合约) ==========
    { type: 'funding', label: 'Funding', category: 'funding', weight: 3, icon: '💰', market: 'perp' },
    
    // ========== TRANSFERS (资产划转) ==========
    { type: 'deposit', label: 'Deposit', category: 'transfer', weight: 3, icon: '📥', market: 'both' },
    { type: 'withdraw', label: 'Withdraw', category: 'transfer', weight: 2, icon: '📤', market: 'both' },
    // Perp <-> Spot
    { type: 'perpToSpot', label: 'Perp→Spot', category: 'transfer', weight: 2, icon: '➡️', market: 'both' },
    { type: 'spotToPerp', label: 'Spot→Perp', category: 'transfer', weight: 2, icon: '⬅️', market: 'both' },
    // Perp <-> Prediction (Polymarket)
    { type: 'perpToPred', label: 'Perp→Prediction', category: 'transfer', weight: 1.5, icon: '🎯', market: 'both' },
    { type: 'predToPerp', label: 'Prediction→Perp', category: 'transfer', weight: 1.5, icon: '🎯', market: 'both' },
    // Spot <-> Prediction (Polymarket)
    { type: 'spotToPred', label: 'Spot→Prediction', category: 'transfer', weight: 1, icon: '🔮', market: 'both' },
    { type: 'predToSpot', label: 'Prediction→Spot', category: 'transfer', weight: 1, icon: '🔮', market: 'both' },
    // Spot Token Transfer (non-USDC)
    { type: 'spotTransfer', label: 'Spot Transfer', category: 'transfer', weight: 1.5, icon: '💸', market: 'spot' },
    // Internal
    { type: 'internalTransfer', label: 'Internal Transfer', category: 'transfer', weight: 0.5, icon: '↔️', market: 'both' },
    
    // ========== ACCOUNT (账户管理 - 仅合约) ==========
    { type: 'updateLeverage', label: 'Update Leverage', category: 'account', weight: 1, icon: '📊', market: 'perp' },
    { type: 'updateMargin', label: 'Update Margin', category: 'account', weight: 1, icon: '💳', market: 'perp' },
    { type: 'setIsolated', label: 'Set Isolated', category: 'account', weight: 0.5, icon: '🔲', market: 'perp' },
    { type: 'setCross', label: 'Set Cross', category: 'account', weight: 0.5, icon: '🔳', market: 'perp' },
    { type: 'approveAgent', label: 'Approve API Wallet', category: 'account', weight: 0.3, icon: '🤖', market: 'both' },
    
    // ========== VAULT / eStrategy (金库) ==========
    { type: 'vaultDeposit', label: 'eStrategy Deposit', category: 'vault', weight: 1.5, icon: '🏦', market: 'both' },
    { type: 'vaultWithdraw', label: 'eStrategy Withdraw', category: 'vault', weight: 1, icon: '🏧', market: 'both' },
    { type: 'vaultClaim', label: 'Claim Rewards', category: 'vault', weight: 0.5, icon: '🎁', market: 'both' },
    
];

// ============================================
// COMPREHENSIVE TRANSACTION STATUS
// L2 Transaction Status (edgeX StarkEx layer)
// ============================================
const TX_STATUS = [
    { status: 'pending', label: 'Pending', icon: '⏳', color: '#f59e0b', weight: 5 },
    { status: 'sequenced', label: 'Sequenced', icon: '📋', color: '#3b82f6', weight: 8 },
    { status: 'confirmed', label: 'Confirmed', icon: '✓', color: '#10b981', weight: 15 },
    { status: 'batched', label: 'Batched', icon: '📦', color: '#8b5cf6', weight: 20 },
    { status: 'proven', label: 'Proven', icon: '🔐', color: '#06b6d4', weight: 25 },
    { status: 'finalized', label: 'Finalized', icon: '✓✓', color: '#22c55e', weight: 25 },
    { status: 'failed', label: 'Failed', icon: '✗', color: '#ef4444', weight: 2 },
];

// ============================================
// BATCH STATUS
// L1 Settlement Status (Ethereum -> Future Edge Chain)
// ============================================
const BATCH_STATUS = [
    { status: 'pending', label: 'Pending', icon: '⏳', color: '#f59e0b', description: 'Batch created, waiting for sequencing' },
    { status: 'sequenced', label: 'Sequenced', icon: '📋', color: '#3b82f6', description: 'Ordered by sequencer, awaiting proof' },
    { status: 'committed', label: 'Committed', icon: '📦', color: '#8b5cf6', description: 'Submitted to L1, awaiting verification' },
    { status: 'proven', label: 'Proven', icon: '🔐', color: '#06b6d4', description: 'STARK proof verified on L1' },
    { status: 'finalized', label: 'Finalized', icon: '✓✓', color: '#22c55e', description: 'Irreversibly settled on L1' },
];

// Order types for trading
const ORDER_TYPES = ['Limit', 'Market', 'Stop Limit', 'Take Profit', 'Stop Market', 'TWAP', 'IOC', 'FOK', 'Post Only'];

// Transaction categories for filtering
const TX_CATEGORIES = [
    { id: 'all', label: 'All', labelZh: '全部' },
    { id: 'perp', label: 'Perpetuals', labelZh: '合约' },
    { id: 'spot', label: 'Spot', labelZh: '现货' },
    { id: 'transfer', label: 'Transfers', labelZh: '划转' },
    { id: 'liquidation', label: 'Liquidations', labelZh: '清算' },
    { id: 'vault', label: 'eStrategy', labelZh: '金库' },
    { id: 'staking', label: 'Earn', labelZh: '收益' },
    { id: 'account', label: 'Account', labelZh: '账户' },
];

// State - edgeX Explorer Stats
let globalState = {
    // ========== EXPLORER STATS ==========
    totalBatches: 18547,
    totalBlocks: 2847563,
    totalTransactions: 156847523,
    totalUsers: 167536,
    
    // ========== PERPETUAL STATS (合约) ==========
    perpTxCount: 142500000,             // 合约交易笔数
    perpVolume: 578203874701,           // 合约交易量
    perpOI: 786949767,                  // 未平仓合约
    perpPairs: 18,                      // 合约交易对数
    perpUsers: 145000,                  // 合约用户数
    
    // ========== SPOT STATS (现货) ==========
    spotTxCount: 14347523,              // 现货交易笔数
    spotVolume: 12450000000,            // 现货交易量
    spotPairs: 12,                      // 现货交易对数
    spotUsers: 52000,                   // 现货用户数
    
    // ========== TVL & DEPOSITS ==========
    totalTVL: 382801272,                // 总锁仓量
    vaultTVL: 133346809,                // eStrategy TVL (from Dune: $133,346,809.57)
    distinctDepositors: 75247,          // 总存款人
    totalDeposit: 1481230872,           // 总充值
    totalWithdraw: 1098429600,          // 总提现
    totalIncome: 160032914,             // 总收入
    
    // ========== $EDGE REPURCHASE ==========
    repurchase: {
        address: '0xf977814e90da44bfa03b6295a0616a897441acec',
        totalAmount: 456230000,         // 累计回购数量 456.23M
        totalValue: 192873986.06,       // 累计回购金额
        amount24h: 6260000,             // 24h回购数量 6.26M
        value24h: 1873986.06,           // 24h回购金额
        amountChange24h: 14.8,          // 24h数量涨跌幅 %
        valueChange24h: -7.93,          // 24h金额涨跌幅 %
    },
    
    // ========== EXPLORER INTERNAL ==========
    latestBatch: 18547,
    avgConfirmTime: 1.8,
    currentTPS: 1250,
    pendingTxCount: 0,
    sequencedTxCount: 0,
    provenBatchCount: 0,
    finalizedBatchCount: 0,
    transactions: [],
    batches: [],
    addresses: {},
    currentPage: {
        tx: 1,
        batch: 1,
        address: 1
    },
    // Settlement layer info
    settlementLayer: {
        current: 'ethereum',
        futureChain: 'edgechain',
        verifierContract: '0x47312450B3Ac8b5b8e247a6bB6d523e7605bDb60',
        starkExContract: '0x5d22045DAcEAB03B158031eCB7D9d06Fad24609b',
    }
};

// Utility Functions
function generateHash() {
    const chars = '0123456789abcdef';
    let hash = '0x';
    for (let i = 0; i < 64; i++) {
        hash += chars[Math.floor(Math.random() * chars.length)];
    }
    return hash;
}

function generateAddress() {
    const chars = '0123456789abcdef';
    let addr = '0x';
    for (let i = 0; i < 40; i++) {
        addr += chars[Math.floor(Math.random() * chars.length)];
    }
    return addr;
}

function truncateHash(hash, start = 6, end = 4) {
    if (!hash) return '';
    return `${hash.slice(0, start)}...${hash.slice(-end)}`;
}

function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(2) + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(2) + 'K';
    }
    return num.toLocaleString();
}

function formatUSD(num) {
    if (num >= 1000000000) {
        return '$' + (num / 1000000000).toFixed(2) + 'B';
    }
    if (num >= 1000000) {
        return '$' + (num / 1000000).toFixed(2) + 'M';
    }
    if (num >= 1000) {
        return '$' + (num / 1000).toFixed(2) + 'K';
    }
    return '$' + num.toFixed(2);
}

function formatTime(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    
    if (diff < 1000) return 'Just now';
    if (diff < 60000) return Math.floor(diff / 1000) + 's ago';
    if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
    if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
    return Math.floor(diff / 86400000) + 'd ago';
}

function formatDateTime(timestamp) {
    const date = new Date(timestamp);
    return date.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getWeightedRandomType() {
    const totalWeight = TX_TYPES.reduce((sum, t) => sum + t.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (const txType of TX_TYPES) {
        random -= txType.weight;
        if (random <= 0) {
            return txType;
        }
    }
    return TX_TYPES[0];
}

function getWeightedRandomStatus() {
    const totalWeight = TX_STATUS.reduce((sum, s) => sum + s.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (const status of TX_STATUS) {
        random -= status.weight;
        if (random <= 0) {
            return status;
        }
    }
    return TX_STATUS[TX_STATUS.length - 2]; // Default to finalized
}

// Get type info
function getTypeInfo(type) {
    return TX_TYPES.find(t => t.type === type) || TX_TYPES[0];
}

// Get status info
function getStatusInfo(status) {
    return TX_STATUS.find(s => s.status === status) || TX_STATUS[0];
}

// Get batch status info
function getBatchStatusInfo(status) {
    return BATCH_STATUS.find(s => s.status === status) || BATCH_STATUS[0];
}

// Transaction Generator
function generateTransaction(timestamp = Date.now()) {
    const txType = getWeightedRandomType();
    
    // Select pair based on transaction type market
    let pair;
    if (txType.market === 'perp') {
        pair = getRandomItem(PERP_PAIRS);
    } else if (txType.market === 'spot') {
        pair = getRandomItem(SPOT_PAIRS);
    } else {
        // 'both' - random choice
        pair = Math.random() > 0.6 ? getRandomItem(PERP_PAIRS) : getRandomItem(SPOT_PAIRS);
    }
    
    // Side: long/short for perp, buy/sell for spot
    const isPerp = pair.market === 'perp';
    const side = isPerp ? (Math.random() > 0.5 ? 'long' : 'short') : (Math.random() > 0.5 ? 'buy' : 'sell');
    
    const orderType = getRandomItem(ORDER_TYPES);
    const statusInfo = getWeightedRandomStatus();
    
    // Price variation: ±0.5%
    const priceVariation = (Math.random() - 0.5) * 0.01;
    const price = pair.basePrice * (1 + priceVariation);
    
    // Size based on pair
    let size;
    if (pair.symbol.includes('BTC')) {
        size = Math.random() * 2 + 0.01;
    } else if (pair.symbol.includes('ETH')) {
        size = Math.random() * 20 + 0.1;
    } else if (pair.symbol.includes('PEPE')) {
        size = Math.floor(Math.random() * 100000000) + 1000000;
    } else {
        size = Math.random() * 1000 + 10;
    }
    
    const value = price * size;
    const feeRate = Math.random() > 0.5 ? 0.00012 : 0.00038;
    const fee = value * feeRate;
    
    const userAddress = generateAddress();
    const counterparty = generateAddress();
    const batchId = globalState.latestBatch - Math.floor(Math.random() * 10);
    
    // Leverage for perp only
    const leverage = isPerp ? Math.floor(Math.random() * 20) + 1 : null;
    
    return {
        hash: generateHash(),
        type: txType.type,
        typeLabel: txType.label,
        typeIcon: txType.icon,
        category: txType.category,
        market: pair.market,                    // 'perp' or 'spot'
        marketLabel: isPerp ? 'Perpetual' : 'Spot',
        pair: pair.symbol,
        side: side,
        sideLabel: isPerp ? (side === 'long' ? 'Long' : 'Short') : (side === 'buy' ? 'Buy' : 'Sell'),
        orderType: orderType,
        price: price,
        priceFormatted: price.toFixed(pair.decimals),
        size: size,
        sizeFormatted: pair.symbol.includes('BTC') ? size.toFixed(4) : 
                       pair.symbol.includes('PEPE') ? Math.floor(size).toLocaleString() :
                       size.toFixed(2),
        value: value,
        valueFormatted: formatUSD(value),
        fee: fee,
        feeFormatted: '$' + fee.toFixed(2),
        feeRate: feeRate === 0.00012 ? 'Maker' : 'Taker',
        user: userAddress,
        counterparty: counterparty,
        timestamp: timestamp,
        timeFormatted: formatTime(timestamp),
        dateTime: formatDateTime(timestamp),
        status: statusInfo.status,
        statusLabel: statusInfo.label,
        statusIcon: statusInfo.icon,
        statusColor: statusInfo.color,
        batchId: batchId,
        positionInBatch: Math.floor(Math.random() * 1000) + 1,
        l1TxHash: generateHash(),
        stateRootBefore: generateHash(),
        stateRootAfter: generateHash(),
        orderId: '#ORD-' + Math.floor(Math.random() * 100000000),
        cloid: '0x' + Math.random().toString(16).slice(2, 34),
        leverage: leverage,
        // Sequencer info
        sequenceNumber: globalState.totalTransactions + Math.floor(Math.random() * 100),
        sequencedAt: timestamp + 100,
        // Proof info
        proofSubmittedAt: statusInfo.status === 'proven' || statusInfo.status === 'finalized' ? timestamp + 60000 : null,
        proofVerifiedAt: statusInfo.status === 'finalized' ? timestamp + 120000 : null,
    };
}

// Batch Generator
function generateBatch(batchId, txCount = null) {
    const timestamp = Date.now() - (globalState.latestBatch - batchId) * 120000;
    txCount = txCount || Math.floor(Math.random() * 2000) + 500;
    
    // Determine batch status based on age
    let statusInfo;
    const batchAge = globalState.latestBatch - batchId;
    if (batchAge === 0) {
        statusInfo = Math.random() > 0.5 ? BATCH_STATUS[0] : BATCH_STATUS[1]; // pending or sequenced
    } else if (batchAge === 1) {
        statusInfo = Math.random() > 0.5 ? BATCH_STATUS[1] : BATCH_STATUS[2]; // sequenced or committed
    } else if (batchAge === 2) {
        statusInfo = BATCH_STATUS[2]; // committed
    } else if (batchAge < 5) {
        statusInfo = BATCH_STATUS[3]; // proven
    } else {
        statusInfo = BATCH_STATUS[4]; // finalized
    }
    
    const gasUsed = Math.floor(Math.random() * 200000) + 150000;
    const gasPrice = 15 + Math.random() * 10;
    const gasCost = (gasUsed * gasPrice * 1e-9 * 3800).toFixed(2);
    
    // DA (Data Availability) info
    const blobSize = Math.floor(txCount * 0.5) + 'KB';
    const compressionRatio = (Math.random() * 0.3 + 0.7).toFixed(2);
    
    return {
        id: batchId,
        createdAt: timestamp,
        createdAtFormatted: formatDateTime(timestamp),
        sequencedAt: timestamp + 30000,
        sequencedAtFormatted: formatDateTime(timestamp + 30000),
        submittedAt: timestamp + 60000,
        submittedAtFormatted: formatDateTime(timestamp + 60000),
        provenAt: statusInfo.status === 'proven' || statusInfo.status === 'finalized' ? timestamp + 90000 : null,
        provenAtFormatted: statusInfo.status === 'proven' || statusInfo.status === 'finalized' ? formatDateTime(timestamp + 90000) : '-',
        finalizedAt: statusInfo.status === 'finalized' ? timestamp + 120000 : null,
        finalizedAtFormatted: statusInfo.status === 'finalized' ? formatDateTime(timestamp + 120000) : '-',
        txCount: txCount,
        l1TxHash: generateHash(),
        ethBlock: 19000000 + batchId * 50 + Math.floor(Math.random() * 10),
        stateRoot: generateHash(),
        previousStateRoot: generateHash(),
        status: statusInfo.status,
        statusLabel: statusInfo.label,
        statusIcon: statusInfo.icon,
        statusColor: statusInfo.color,
        statusDescription: statusInfo.description,
        gasUsed: gasUsed.toLocaleString(),
        gasCost: '$' + gasCost,
        timeFormatted: formatTime(timestamp),
        // Proof info
        proofType: 'STARK',
        proofSize: Math.floor(Math.random() * 50) + 10 + 'KB',
        verifierContract: globalState.settlementLayer.verifierContract,
        // DA info
        blobSize: blobSize,
        compressionRatio: compressionRatio,
        dataAvailability: 'ZK-Rollup',
        // Settlement layer
        settlementLayer: globalState.settlementLayer.current === 'ethereum' ? 'Ethereum' : 'Edge Chain',
        settlementLayerIcon: globalState.settlementLayer.current === 'ethereum' ? '⟠' : '◈',
    };
}

// Initialize Data
function initializeData() {
    // Generate initial transactions with diverse types and statuses
    const now = Date.now();
    for (let i = 0; i < 100; i++) {
        const tx = generateTransaction(now - i * 2000 - Math.random() * 1000);
        globalState.transactions.push(tx);
    }
    
    // Generate initial batches with status progression
    for (let i = 0; i < 50; i++) {
        const batch = generateBatch(globalState.latestBatch - i);
        globalState.batches.push(batch);
    }
    
    // Update stats
    updateGlobalStats();
    
    // Generate addresses
    const addressList = [...new Set(globalState.transactions.map(tx => tx.user))];
    addressList.forEach(addr => {
        const txs = globalState.transactions.filter(tx => tx.user === addr || tx.counterparty === addr);
        globalState.addresses[addr] = {
            address: addr,
            txCount: Math.floor(Math.random() * 5000) + 100,
            volume: Math.random() * 50000000 + 100000,
            firstTx: now - Math.random() * 30 * 24 * 60 * 60 * 1000,
            lastTx: now - Math.random() * 60000,
            transactions: txs
        };
    });
}

function updateGlobalStats() {
    globalState.pendingTxCount = globalState.transactions.filter(tx => tx.status === 'pending').length;
    globalState.sequencedTxCount = globalState.transactions.filter(tx => tx.status === 'sequenced').length;
    globalState.provenBatchCount = globalState.batches.filter(b => b.status === 'proven').length;
    globalState.finalizedBatchCount = globalState.batches.filter(b => b.status === 'finalized').length;
}

// Real-time Data Updates
function addNewTransaction() {
    const tx = generateTransaction();
    globalState.transactions.unshift(tx);
    
    if (globalState.transactions.length > 1000) {
        globalState.transactions.pop();
    }
    
    globalState.totalTransactions++;
    globalState.volume24h += tx.value;
    globalState.currentTPS = Math.floor(800 + Math.random() * 800);
    
    updateGlobalStats();
    
    return tx;
}

function addNewBatch() {
    globalState.latestBatch++;
    const batch = generateBatch(globalState.latestBatch, Math.floor(Math.random() * 2000) + 800);
    globalState.batches.unshift(batch);
    
    // Update older batches status (simulate progression)
    globalState.batches.forEach((b, i) => {
        if (i > 0 && i < 3) {
            if (b.status === 'pending') {
                b.status = 'sequenced';
                b.statusLabel = 'Sequenced';
                b.statusIcon = '📋';
            } else if (b.status === 'sequenced') {
                b.status = 'committed';
                b.statusLabel = 'Committed';
                b.statusIcon = '📦';
            }
        } else if (i >= 3 && i < 6) {
            if (b.status === 'committed') {
                b.status = 'proven';
                b.statusLabel = 'Proven';
                b.statusIcon = '🔐';
            }
        } else if (i >= 6) {
            if (b.status === 'proven') {
                b.status = 'finalized';
                b.statusLabel = 'Finalized';
                b.statusIcon = '✓✓';
            }
        }
    });
    
    // Also update transaction statuses for transactions in older batches
    globalState.transactions.forEach(tx => {
        const batchAge = globalState.latestBatch - tx.batchId;
        if (batchAge >= 6 && tx.status !== 'finalized' && tx.status !== 'failed') {
            tx.status = 'finalized';
            tx.statusLabel = 'Finalized';
            tx.statusIcon = '✓✓';
        } else if (batchAge >= 3 && batchAge < 6 && tx.status !== 'proven' && tx.status !== 'finalized' && tx.status !== 'failed') {
            tx.status = 'proven';
            tx.statusLabel = 'Proven';
            tx.statusIcon = '🔐';
        }
    });
    
    if (globalState.batches.length > 100) {
        globalState.batches.pop();
    }
    
    updateGlobalStats();
    
    return batch;
}

// Data Access Functions
function getTransactions(page = 1, limit = 20, filters = {}) {
    let filtered = [...globalState.transactions];
    
    if (filters.type && filters.type !== 'all') {
        filtered = filtered.filter(tx => tx.type === filters.type);
    }
    
    if (filters.category && filters.category !== 'all') {
        filtered = filtered.filter(tx => tx.category === filters.category);
    }
    
    if (filters.pair && filters.pair !== 'all') {
        filtered = filtered.filter(tx => tx.pair === filters.pair);
    }
    
    if (filters.status && filters.status !== 'all') {
        filtered = filtered.filter(tx => tx.status === filters.status);
    }
    
    if (filters.address) {
        filtered = filtered.filter(tx => tx.user === filters.address || tx.counterparty === filters.address);
    }
    
    const start = (page - 1) * limit;
    return {
        data: filtered.slice(start, start + limit),
        total: filtered.length,
        page: page,
        totalPages: Math.ceil(filtered.length / limit)
    };
}

function getBatches(page = 1, limit = 20, filters = {}) {
    let filtered = [...globalState.batches];
    
    if (filters.status && filters.status !== 'all') {
        filtered = filtered.filter(b => b.status === filters.status);
    }
    
    const start = (page - 1) * limit;
    return {
        data: filtered.slice(start, start + limit),
        total: filtered.length,
        page: page,
        totalPages: Math.ceil(filtered.length / limit)
    };
}

function getTransaction(hash) {
    let tx = globalState.transactions.find(t => t.hash === hash);
    if (!tx) {
        tx = generateTransaction();
        tx.hash = hash;
    }
    return tx;
}

function getBatch(id) {
    let batch = globalState.batches.find(b => b.id === parseInt(id));
    if (!batch) {
        batch = generateBatch(parseInt(id));
    }
    
    // Generate transactions for this batch with proper status based on batch status
    const batchTxs = [];
    for (let i = 0; i < 50; i++) {
        const tx = generateTransaction();
        tx.batchId = batch.id;
        // Inherit status from batch
        if (batch.status === 'finalized') {
            tx.status = 'finalized';
            tx.statusLabel = 'Finalized';
            tx.statusIcon = '✓✓';
        } else if (batch.status === 'proven') {
            tx.status = 'proven';
            tx.statusLabel = 'Proven';
            tx.statusIcon = '🔐';
        } else if (batch.status === 'committed') {
            tx.status = 'batched';
            tx.statusLabel = 'Batched';
            tx.statusIcon = '📦';
        }
        batchTxs.push(tx);
    }
    batch.transactions = batchTxs;
    
    return batch;
}

function getAddress(address) {
    if (!globalState.addresses[address]) {
        const now = Date.now();
        const txs = [];
        const txCount = Math.floor(Math.random() * 500) + 50;
        
        for (let i = 0; i < Math.min(txCount, 100); i++) {
            const tx = generateTransaction(now - i * 60000 - Math.random() * 30000);
            tx.user = address;
            txs.push(tx);
        }
        
        // Generate Perps Positions
        const perpsPairs = ['BTC', 'ETH', 'SOL', 'ARB', 'OP', 'AVAX', 'DOGE', 'MATIC'];
        const perpsPositions = [];
        const numPerpsPositions = Math.floor(Math.random() * 4) + 1;
        let perpsTotal = 0;
        for (let i = 0; i < numPerpsPositions; i++) {
            const pair = perpsPairs[Math.floor(Math.random() * perpsPairs.length)];
            if (!perpsPositions.find(p => p.pair === pair)) {
                const value = Math.random() * 50000 + 1000;
                perpsTotal += value;
                perpsPositions.push({
                    pair: pair,
                    side: Math.random() > 0.5 ? 'long' : 'short',
                    size: (Math.random() * 10 + 0.1).toFixed(2),
                    value: value
                });
            }
        }
        
        // Generate Spot Holdings
        const spotCoins = [
            { symbol: 'USDC', price: 1 },
            { symbol: 'USDT', price: 1 },
            { symbol: 'BTC', price: 43250 },
            { symbol: 'ETH', price: 2280 },
            { symbol: 'SOL', price: 98 },
            { symbol: 'ARB', price: 1.12 }
        ];
        const spotHoldings = [];
        const numSpotHoldings = Math.floor(Math.random() * 4) + 2;
        let spotTotal = 0;
        const usedCoins = new Set();
        for (let i = 0; i < numSpotHoldings; i++) {
            const coinIdx = Math.floor(Math.random() * spotCoins.length);
            const coin = spotCoins[coinIdx];
            if (!usedCoins.has(coin.symbol)) {
                usedCoins.add(coin.symbol);
                const amount = coin.symbol === 'USDC' || coin.symbol === 'USDT' 
                    ? Math.random() * 500000 + 10000 
                    : Math.random() * 10 + 0.01;
                const value = amount * coin.price;
                spotTotal += value;
                spotHoldings.push({
                    symbol: coin.symbol,
                    amount: amount,
                    value: value
                });
            }
        }
        // Calculate percentages
        spotHoldings.forEach(h => h.percent = (h.value / spotTotal * 100).toFixed(1));
        spotHoldings.sort((a, b) => b.value - a.value);
        
        // Generate Prediction Positions
        const predictionValue = Math.random() > 0.5 ? Math.random() * 20000 + 500 : 0;
        const predictionPositions = predictionValue > 0 ? [
            { market: 'BTC > 50K EOY', value: predictionValue * 0.6 },
            { market: 'ETH > 3K Q1', value: predictionValue * 0.4 }
        ] : [];
        
        // Generate Vault Deposits
        const vaultValue = Math.random() > 0.3 ? Math.random() * 100000 + 5000 : 0;
        const vaultDeposits = vaultValue > 0 ? [
            { name: 'USDC Vault', value: vaultValue * 0.7 },
            { name: 'ETH Vault', value: vaultValue * 0.3 }
        ] : [];
        
        // Calculate total (must equal sum of all accounts)
        const totalValue = perpsTotal + spotTotal + predictionValue + vaultValue;
        
        globalState.addresses[address] = {
            address: address,
            txCount: txCount,
            volume: txs.reduce((sum, tx) => sum + tx.value, 0) * (txCount / txs.length),
            firstTx: now - txCount * 60000,
            lastTx: now - Math.random() * 60000,
            transactions: txs,
            // Account Values
            totalValue: totalValue,
            perpsValue: perpsTotal,
            spotValue: spotTotal,
            predictionValue: predictionValue,
            vaultValue: vaultValue,
            // Positions/Holdings
            perpsPositions: perpsPositions,
            spotHoldings: spotHoldings,
            predictionPositions: predictionPositions,
            vaultDeposits: vaultDeposits
        };
    }
    
    return globalState.addresses[address];
}

function searchData(query) {
    query = query.toLowerCase().trim();
    
    // Check if it's a transaction hash
    if (query.startsWith('0x') && query.length === 66) {
        return { type: 'transaction', data: getTransaction(query) };
    }
    
    // Check if it's an address
    if (query.startsWith('0x') && query.length === 42) {
        return { type: 'address', data: getAddress(query) };
    }
    
    // Check if it's a batch ID
    if (query.startsWith('#')) {
        const batchId = parseInt(query.slice(1));
        if (!isNaN(batchId)) {
            return { type: 'batch', data: getBatch(batchId) };
        }
    }
    
    // Check if it's a numeric batch ID
    const numericId = parseInt(query);
    if (!isNaN(numericId) && numericId > 0 && numericId < 100000) {
        return { type: 'batch', data: getBatch(numericId) };
    }
    
    // Check if it's an order ID
    if (query.startsWith('#ord-') || query.startsWith('ord-')) {
        const tx = generateTransaction();
        tx.orderId = query.toUpperCase();
        return { type: 'transaction', data: tx };
    }
    
    return { type: 'notfound', data: null };
}

// Get all transaction types for dropdown
function getAllTxTypes() {
    return TX_TYPES;
}

// Get all transaction statuses for dropdown
function getAllTxStatuses() {
    return TX_STATUS;
}

// Get all batch statuses for dropdown
function getAllBatchStatuses() {
    return BATCH_STATUS;
}

// Get transaction categories for dropdown
function getTxCategories() {
    return TX_CATEGORIES;
}

// Initialize on load
initializeData();
