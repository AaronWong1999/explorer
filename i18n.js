// Internationalization for edgeX Explorer
// Comprehensive translations including all transaction types and statuses

const translations = {
    en: {
        // Header
        'nav.trade': 'Trade',
        'nav.portfolio': 'Portfolio',
        'nav.explorer': 'Explorer',
        'nav.connect': 'Connect Wallet',
        'nav.mainnet': 'Mainnet',
        'nav.testnet': 'Testnet',
        
        // Stats
        'stats.totalTxs': 'Transactions',
        'stats.totalUsers': 'Users',
        'stats.perpVolume': 'Perp Volume',
        'stats.perpOI': 'Perp OI',
        'stats.spotVolume': 'Spot Volume',
        'stats.tvl': 'TVL',
        'stats.vaultTVL': 'eStrategy TVL',
        'stats.distinctDepositors': 'Depositors',
        'stats.totalDeposit': 'Deposit',
        'stats.totalWithdraw': 'Withdraw',
        'stats.totalIncome': 'Income',
        'stats.totalBatches': 'Batches',
        'stats.currentTps': 'TPS',
        'stats.pendingTxs': 'Pending',
        'stats.sequencedTxs': 'Sequenced',
        'stats.latestBatch': 'Latest Batch',
        'stats.provenBatches': 'Proven',
        'stats.finalizedBatches': 'Finalized',
        
        // Repurchase
        'repurchase.address': 'Repurchase Address',
        'repurchase.totalAmount': 'Total Repurchase Amount',
        'repurchase.totalValue': 'Total Repurchase Value',
        'repurchase.24hAmount': '24h Repurchase Amount',
        'repurchase.24hValue': '24h Repurchase Value',
        
        // Search
        'search.placeholder': 'Search by Tx Hash / Address / Batch ID / Block / Order ID',
        'search.button': 'Search',
        'search.recentSearches': 'Recent Searches',
        'search.popularSearches': 'Popular',
        'search.noResults': 'No results found',
        'search.searching': 'Searching...',
        'search.txHash': 'Transaction',
        'search.address': 'Address',
        'search.batch': 'Batch',
        'search.block': 'Block',
        'search.order': 'Order',
        'search.quickFilters': 'Quick Filters',
        
        // Home
        'home.latestTxs': 'Latest Transactions',
        'home.latestBatches': 'Latest Batches',
        'home.latestBlocks': 'Latest Blocks',
        'home.liveActivity': 'Live Activity',
        'home.viewAll': 'View All',
        'home.all': 'All',
        'home.perp': 'Perp',
        'home.spot': 'Spot',
        'home.transfers': 'Transfers',
        'home.liquidations': 'Liquidations',
        'home.vault': 'eStrategy',
        'home.account': 'Account',
        'home.trading': 'Trading',
        
        // Table Headers
        'table.txHash': 'Tx Hash',
        'table.type': 'Type',
        'table.pair': 'Pair',
        'table.time': 'Time',
        'table.user': 'User',
        'table.status': 'Status',
        'table.batchId': 'Batch ID',
        'table.blockNumber': 'Block',
        'table.txns': 'Txns',
        'table.l1Tx': 'L1 Tx',
        'table.side': 'Side',
        'table.price': 'Price',
        'table.size': 'Size',
        'table.value': 'Value',
        'table.fee': 'Fee',
        'table.from': 'From',
        'table.to': 'To',
        'table.amount': 'Amount',
        'table.method': 'Method',
        'table.gasUsed': 'Gas Used',
        'table.stateRoot': 'State Root',
        'table.created': 'Created',
        'table.submitted': 'Submitted',
        'table.ethBlock': 'ETH Block',
        'table.sequenced': 'Sequenced',
        'table.proven': 'Proven',
        'table.finalized': 'Finalized',
        
        // ============================================
        // COMPREHENSIVE TRANSACTION TYPES
        // ============================================
        // Perpetual Trading
        'type.perpTrade': 'Perp Trade',
        'type.perpOrder': 'Perp Order',
        'type.perpCancel': 'Perp Cancel',
        'type.perpModify': 'Perp Modify',
        'type.perpTwap': 'Perp TWAP',
        'type.perpTwapCancel': 'Cancel TWAP',
        'type.perpCancelByCloid': 'Cancel by ClOID',
        'type.perpCancelAll': 'Cancel All Orders',
        'type.perpBatchModify': 'Batch Modify',
        'type.scheduleCancel': 'Schedule Cancel',
        // Spot Trading
        'type.spotTrade': 'Spot Trade',
        'type.spotOrder': 'Spot Order',
        'type.spotCancel': 'Spot Cancel',
        'type.spotModify': 'Spot Modify',
        'type.spotCancelByCloid': 'Cancel by ClOID',
        'type.spotCancelAll': 'Cancel All Orders',
        'type.spotBatchModify': 'Batch Modify',
        // Liquidation
        'type.liquidation': 'Liquidation',
        'type.adl': 'Auto-Deleverage',
        // Funding
        'type.funding': 'Funding',
        // Asset Transfers
        'type.deposit': 'Deposit',
        'type.withdraw': 'Withdraw',
        'type.perpToSpot': 'Perp→Spot',
        'type.spotToPerp': 'Spot→Perp',
        'type.perpToPred': 'Perp→Prediction',
        'type.predToPerp': 'Prediction→Perp',
        'type.spotToPred': 'Spot→Prediction',
        'type.predToSpot': 'Prediction→Spot',
        'type.spotTransfer': 'Spot Transfer',
        'type.internalTransfer': 'Internal Transfer',
        // Account Management
        'type.updateLeverage': 'Update Leverage',
        'type.updateMargin': 'Update Margin',
        'type.setIsolated': 'Set Isolated',
        'type.setCross': 'Set Cross',
        'type.approveAgent': 'Approve API Wallet',
        // Vault / eStrategy Operations
        'type.vaultDeposit': 'eStrategy Deposit',
        'type.vaultWithdraw': 'eStrategy Withdraw',
        'type.vaultClaim': 'Claim Rewards',

        
        // ============================================
        // COMPREHENSIVE TRANSACTION STATUS
        // ============================================
        'status.pending': 'Pending',
        'status.sequenced': 'Sequenced',
        'status.confirmed': 'Confirmed',
        'status.batched': 'Batched',
        'status.committed': 'Committed',
        'status.proven': 'Proven',
        'status.finalized': 'Finalized',
        'status.settled': 'Settled',
        'status.failed': 'Failed',
        'status.success': 'Success',
        
        // Status Descriptions
        'statusDesc.pending': 'Transaction submitted, waiting for sequencing',
        'statusDesc.sequenced': 'Ordered by sequencer, awaiting batch inclusion',
        'statusDesc.confirmed': 'Confirmed on L2, awaiting batch submission',
        'statusDesc.batched': 'Included in batch, awaiting L1 submission',
        'statusDesc.committed': 'Submitted to L1, awaiting proof verification',
        'statusDesc.proven': 'STARK proof verified on settlement layer',
        'statusDesc.finalized': 'Irreversibly settled, cannot be reverted',
        'statusDesc.failed': 'Transaction failed to execute',
        
        // Sides
        'side.long': 'Long',
        'side.short': 'Short',
        'side.buy': 'Buy',
        'side.sell': 'Sell',
        
        // Pages
        'page.allTransactions': 'All Transactions',
        'page.allBatches': 'All Batches',
        'page.allBlocks': 'All Blocks',
        'page.transactionDetails': 'Transaction Details',
        'page.batchDetails': 'Batch Details',
        'page.blockDetails': 'Block Details',
        'page.addressDetails': 'Address Details',
        
        // Categories
        'category.all': 'All',
        'category.trading': 'Trading',
        'category.transfer': 'Transfers',
        'category.liquidation': 'Liquidations',
        'category.vault': 'Vault',
        'category.staking': 'Staking',
        'category.account': 'Account',
        'category.agent': 'Agent',
        'category.schedule': 'Schedule',
        'category.funding': 'Funding',
        
        // Filters
        'filter.allTypes': 'All Types',
        'filter.allPairs': 'All Pairs',
        'filter.allStatus': 'All Status',
        'filter.allCategories': 'All Categories',
        'filter.export': 'Export CSV',
        
        // Pagination
        'pagination.previous': '← Previous',
        'pagination.next': 'Next →',
        'pagination.page': 'Page',
        'pagination.of': 'of',
        
        // Transaction Detail
        'txDetail.basicInfo': 'Transaction Details',
        'txDetail.hash': 'Transaction Hash',
        'txDetail.status': 'Status',
        'txDetail.timestamp': 'Timestamp',
        'txDetail.batch': 'Batch',
        'txDetail.block': 'Block',
        'txDetail.position': 'Position in Batch',
        'txDetail.content': 'Transaction Content',
        'txDetail.type': 'Type',
        'txDetail.pair': 'Trading Pair',
        'txDetail.side': 'Side',
        'txDetail.orderType': 'Order Type',
        'txDetail.price': 'Price',
        'txDetail.size': 'Size',
        'txDetail.value': 'Value',
        'txDetail.fee': 'Fee',
        'txDetail.role': 'Role',
        'txDetail.leverage': 'Leverage',
        'txDetail.onChainProof': 'On-Chain Settlement Proof',
        'txDetail.zkVerified': 'ZK Verified',
        'txDetail.settlementLayer': 'Settlement Layer',
        'txDetail.l1Tx': 'L1 Transaction',
        'txDetail.viewEtherscan': 'View on Etherscan',
        'txDetail.viewEdgeChain': 'View on Edge Chain',
        'txDetail.proofStatus': 'Proof Status',
        'txDetail.stateRootBefore': 'State Root (Before)',
        'txDetail.stateRootAfter': 'State Root (After)',
        'txDetail.verifyTime': 'Verification Time',
        'txDetail.verifyProof': 'Verify Proof',
        'txDetail.techDetails': 'Technical Details',
        'txDetail.relatedInfo': 'Related Information',
        'txDetail.orderId': 'Order ID',
        'txDetail.cloid': 'Client Order ID',
        'txDetail.userAddress': 'User Address',
        'txDetail.counterparty': 'Counterparty',
        'txDetail.proofVerified': 'STARK Proof Verified',
        'txDetail.inputData': 'Input Data',
        'txDetail.logs': 'Event Logs',
        'txDetail.internalTxs': 'Internal Transactions',
        'txDetail.sequenceInfo': 'Sequence Information',
        'txDetail.sequenceNumber': 'Sequence Number',
        'txDetail.sequencedAt': 'Sequenced At',
        
        // Batch Detail
        'batchDetail.info': 'Batch Information',
        'batchDetail.id': 'Batch ID',
        'batchDetail.createdAt': 'Created At',
        'batchDetail.sequencedAt': 'Sequenced At',
        'batchDetail.submittedAt': 'Submitted At',
        'batchDetail.provenAt': 'Proven At',
        'batchDetail.finalizedAt': 'Finalized At',
        'batchDetail.totalTxs': 'Total Transactions',
        'batchDetail.settlement': 'Settlement Information',
        'batchDetail.ethSettlement': 'Ethereum Settlement',
        'batchDetail.edgeChainSettlement': 'Edge Chain Settlement',
        'batchDetail.l1TxHash': 'L1 Transaction Hash',
        'batchDetail.ethBlock': 'Ethereum Block',
        'batchDetail.gasUsed': 'Gas Used',
        'batchDetail.proofType': 'Proof Type',
        'batchDetail.proofSize': 'Proof Size',
        'batchDetail.stateRoot': 'State Root',
        'batchDetail.previousStateRoot': 'Previous State Root',
        'batchDetail.txsInBatch': 'Transactions in this Batch',
        'batchDetail.showing': 'Showing',
        'batchDetail.ofTxs': 'transactions in batch',
        'batchDetail.dataAvailability': 'Data Availability',
        'batchDetail.blobSize': 'Blob Size',
        'batchDetail.compressionRatio': 'Compression Ratio',
        'batchDetail.verifierContract': 'Verifier Contract',
        'batchDetail.statusTimeline': 'Status Timeline',
        
        // Block Detail
        'blockDetail.info': 'Block Information',
        'blockDetail.number': 'Block Number',
        'blockDetail.hash': 'Block Hash',
        'blockDetail.parentHash': 'Parent Hash',
        'blockDetail.timestamp': 'Timestamp',
        'blockDetail.txCount': 'Transaction Count',
        'blockDetail.gasUsed': 'Gas Used',
        'blockDetail.gasLimit': 'Gas Limit',
        'blockDetail.validator': 'Validator',
        'blockDetail.txsInBlock': 'Transactions in this Block',
        
        // Address Page
        'address.overview': 'Overview',
        'address.txCount': 'Total Transactions',
        'address.volume': 'Total Volume',
        'address.firstTx': 'First Transaction',
        'address.lastTx': 'Last Transaction',
        'address.balance': 'Balance',
        'address.pnl': 'Realized PnL',
        'address.txHistory': 'Transaction History',
        'address.positions': 'Positions',
        'address.orders': 'Open Orders',
        'address.transfers': 'Transfers',
        'address.totalValue': 'Total Account Value',
        'address.perpsAccount': 'Perps Account',
        'address.spotAccount': 'Spot Account',
        'address.predictionAccount': 'Prediction Account',
        'address.vaultAccount': 'Vault Account',
        'address.noPositions': 'No positions',
        'address.noHoldings': 'No holdings',
        'address.noDeposits': 'No deposits',
        
        // Footer
        'footer.docs': 'Docs',
        'footer.api': 'API',
        'footer.support': 'Support',
        'footer.terms': 'Terms',
        'footer.status': 'All Systems Operational',
        'footer.edgeChain': 'Edge Chain',
        'footer.github': 'GitHub',
        
        // Toast & Modal
        'toast.copied': 'Copied to clipboard!',
        'toast.copyFailed': 'Failed to copy',
        'toast.exporting': 'Exporting data as CSV...',
        'toast.exportComplete': 'Export complete!',
        'toast.noResults': 'No results found for:',
        'modal.close': 'Close',
        'modal.verifyTitle': 'Verify ZK Proof',
        'modal.verifySuccess': 'Proof Verified Successfully',
        'modal.verifyDesc': 'This transaction has been verified on the settlement layer using STARK proof technology.',
        'modal.verifyMethod': 'Verification Method',
        'modal.verifierContract': 'Verifier Contract',
        'modal.verifyBlock': 'Verification Block',
        'modal.techTitle': 'Technical Details',
        'modal.dataAvailability': 'Data Availability Mode',
        'modal.proofSystem': 'Proof System',
        'modal.securityLevel': 'Security Level',
        'modal.prover': 'Prover',
        'modal.merkleTree': 'Merkle Tree Structure',
        'modal.treeHeight': 'Tree Height',
        'modal.leafType': 'Leaf Type',
        'modal.hashFunction': 'Hash Function',
        
        // Requirements Page
        'nav.requirements': 'Requirements',
        'requirements.title': 'edgeX Explorer Requirements Introduction',
        'requirements.subtitle': 'This document describes the complete functional requirements and page structure of edgeX Explorer blockchain browser',
        
        // Blocks Page (Reserved)
        'blocks.edgeChainReserved': 'Edge Chain Reserved',
        'blocks.reservedTitle': 'Edge Chain Upgrade Reserved Page',
        'blocks.reservedDesc': 'This page is reserved for the future Edge Chain upgrade. Currently, edgeX settles transactions on Ethereum Mainnet through batches. When Edge Chain launches, this page will display native block information.',
        'blocks.currentSettlement': 'Current Settlement',
        'blocks.futureSettlement': 'Future Settlement',
        'blocks.status': 'Status',
        'blocks.comingSoon': 'Coming Soon',
        'blocks.viewBatches': 'View Current Batches',
        'blocks.previewTitle': 'Preview: Future Block List',
        'blocks.previewDesc': 'The following is a simulated preview of the block list when Edge Chain launches.',
        'blocks.validator': 'Validator',
        'blocks.gasUsed': 'Gas Used',
        'table.hash': 'Hash',
        
        // Network Switch
        'network.mainnet': 'edgeX Mainnet',
        'network.testnet': 'edgeX Testnet',
        'network.edgeChain': 'Edge Chain (Coming Soon)',
        'network.switch': 'Switch Network',
        'network.settlementEth': 'Settlement: Ethereum',
        'network.settlementEdge': 'Settlement: Edge Chain',
        
        // Settlement Layer
        'settlement.ethereum': 'Ethereum Mainnet',
        'settlement.edgeChain': 'Edge Chain',
        'settlement.current': 'Current Settlement Layer',
        'settlement.future': 'Future Settlement (Edge Chain)',
        'settlement.upgrade': 'Settlement layer will upgrade to Edge Chain',
    },
    
    zh: {
        // Header
        'nav.trade': '交易',
        'nav.portfolio': '资产',
        'nav.explorer': '浏览器',
        'nav.connect': '连接钱包',
        'nav.mainnet': '主网',
        'nav.testnet': '测试网',
        
        // Stats
        'stats.totalTxs': '交易数',
        'stats.totalUsers': '用户数',
        'stats.perpVolume': '合约交易量',
        'stats.perpOI': '合约OI',
        'stats.spotVolume': '现货交易量',
        'stats.tvl': 'TVL',
        'stats.vaultTVL': '金库TVL',
        'stats.distinctDepositors': '存款人',
        'stats.totalDeposit': '充值',
        'stats.totalWithdraw': '提现',
        'stats.totalIncome': '收入',
        'stats.totalBatches': '批次',
        'stats.currentTps': 'TPS',
        'stats.pendingTxs': '待处理',
        'stats.sequencedTxs': '已排序',
        'stats.latestBatch': '最新批次',
        'stats.provenBatches': '已证明',
        'stats.finalizedBatches': '已确定',
        
        // Repurchase
        'repurchase.address': '回购地址',
        'repurchase.totalAmount': '累计回购数量',
        'repurchase.totalValue': '累计回购金额',
        'repurchase.24hAmount': '过去24小时回购数量',
        'repurchase.24hValue': '过去24小时回购金额',
        
        // Search
        'search.placeholder': '搜索交易哈希 / 地址 / 批次ID / 区块 / 订单ID',
        'search.button': '搜索',
        'search.recentSearches': '最近搜索',
        'search.popularSearches': '热门',
        'search.noResults': '未找到结果',
        'search.searching': '搜索中...',
        'search.txHash': '交易',
        'search.address': '地址',
        'search.batch': '批次',
        'search.block': '区块',
        'search.order': '订单',
        'search.quickFilters': '快捷筛选',
        
        // Home
        'home.latestTxs': '最新交易',
        'home.latestBatches': '最新批次',
        'home.latestBlocks': '最新区块',
        'home.liveActivity': '实时动态',
        'home.viewAll': '查看全部',
        'home.all': '全部',
        'home.perp': '合约',
        'home.spot': '现货',
        'home.transfers': '划转',
        'home.liquidations': '清算',
        'home.vault': '金库',
        'home.account': '账户',
        'home.trading': '交易',
        
        // Table Headers
        'table.txHash': '交易哈希',
        'table.type': '类型',
        'table.pair': '交易对',
        'table.time': '时间',
        'table.user': '用户',
        'table.status': '状态',
        'table.batchId': '批次ID',
        'table.blockNumber': '区块',
        'table.txns': '交易数',
        'table.l1Tx': 'L1交易',
        'table.side': '方向',
        'table.price': '价格',
        'table.size': '数量',
        'table.value': '价值',
        'table.fee': '手续费',
        'table.from': '发送方',
        'table.to': '接收方',
        'table.amount': '金额',
        'table.method': '方法',
        'table.gasUsed': 'Gas消耗',
        'table.stateRoot': '状态根',
        'table.created': '创建时间',
        'table.submitted': '提交时间',
        'table.ethBlock': '以太坊区块',
        'table.sequenced': '排序时间',
        'table.proven': '证明时间',
        'table.finalized': '最终确定',
        
        // ============================================
        // COMPREHENSIVE TRANSACTION TYPES
        // ============================================
        // Perpetual Trading
        'type.perpTrade': '合约成交',
        'type.perpOrder': '合约下单',
        'type.perpCancel': '合约撤单',
        'type.perpModify': '合约改单',
        'type.perpTwap': '合约TWAP',
        'type.perpTwapCancel': '取消TWAP',
        'type.perpCancelByCloid': '按ClOID撤单',
        'type.perpCancelAll': '撤销全部订单',
        'type.perpBatchModify': '批量改单',
        'type.scheduleCancel': '计划撤单',
        // Spot Trading
        'type.spotTrade': '现货成交',
        'type.spotOrder': '现货下单',
        'type.spotCancel': '现货撤单',
        'type.spotModify': '现货改单',
        'type.spotCancelByCloid': '按ClOID撤单',
        'type.spotCancelAll': '撤销全部订单',
        'type.spotBatchModify': '批量改单',
        // Liquidation
        'type.liquidation': '强平',
        'type.adl': '自动减仓',
        // Funding
        'type.funding': '资金费',
        // Asset Transfers
        'type.deposit': '充值',
        'type.withdraw': '提现',
        'type.perpToSpot': '合约→现货',
        'type.spotToPerp': '现货→合约',
        'type.perpToPred': '合约→预测',
        'type.predToPerp': '预测→合约',
        'type.spotToPred': '现货→预测',
        'type.predToSpot': '预测→现货',
        'type.spotTransfer': '现货转账',
        'type.internalTransfer': '内部划转',
        // Account Management
        'type.updateLeverage': '调整杠杆',
        'type.updateMargin': '调整保证金',
        'type.setIsolated': '设为逐仓',
        'type.setCross': '设为全仓',
        'type.approveAgent': '授权API钱包',
        // Vault / eStrategy Operations
        'type.vaultDeposit': '金库存入',
        'type.vaultWithdraw': '金库取出',
        'type.vaultClaim': '领取收益',

        
        // ============================================
        // COMPREHENSIVE TRANSACTION STATUS
        // ============================================
        'status.pending': '待处理',
        'status.sequenced': '已排序',
        'status.confirmed': '已确认',
        'status.batched': '已打包',
        'status.committed': '已提交',
        'status.proven': '已证明',
        'status.finalized': '已最终确定',
        'status.settled': '已结算',
        'status.failed': '失败',
        'status.success': '成功',
        
        // Status Descriptions
        'statusDesc.pending': '交易已提交，等待排序',
        'statusDesc.sequenced': '已被排序器排序，等待打包',
        'statusDesc.confirmed': 'L2已确认，等待批次提交',
        'statusDesc.batched': '已包含在批次中，等待L1提交',
        'statusDesc.committed': '已提交到L1，等待证明验证',
        'statusDesc.proven': 'STARK证明已在结算层验证',
        'statusDesc.finalized': '已不可逆结算，无法回滚',
        'statusDesc.failed': '交易执行失败',
        
        // Sides
        'side.long': '做多',
        'side.short': '做空',
        'side.buy': '买入',
        'side.sell': '卖出',
        
        // Pages
        'page.allTransactions': '全部交易',
        'page.allBatches': '全部批次',
        'page.allBlocks': '全部区块',
        'page.transactionDetails': '交易详情',
        'page.batchDetails': '批次详情',
        'page.blockDetails': '区块详情',
        'page.addressDetails': '地址详情',
        
        // Categories
        'category.all': '全部',
        'category.trading': '交易',
        'category.transfer': '转账',
        'category.liquidation': '清算',
        'category.vault': '金库',
        'category.staking': '质押',
        'category.account': '账户',
        'category.agent': '代理',
        'category.schedule': '计划',
        'category.funding': '资金费',
        
        // Filters
        'filter.allTypes': '全部类型',
        'filter.allPairs': '全部交易对',
        'filter.allStatus': '全部状态',
        'filter.allCategories': '全部分类',
        'filter.export': '导出CSV',
        
        // Pagination
        'pagination.previous': '← 上一页',
        'pagination.next': '下一页 →',
        'pagination.page': '第',
        'pagination.of': '页，共',
        
        // Transaction Detail
        'txDetail.basicInfo': '交易详情',
        'txDetail.hash': '交易哈希',
        'txDetail.status': '状态',
        'txDetail.timestamp': '时间戳',
        'txDetail.batch': '批次',
        'txDetail.block': '区块',
        'txDetail.position': '批次内位置',
        'txDetail.content': '交易内容',
        'txDetail.type': '类型',
        'txDetail.pair': '交易对',
        'txDetail.side': '方向',
        'txDetail.orderType': '订单类型',
        'txDetail.price': '价格',
        'txDetail.size': '数量',
        'txDetail.value': '价值',
        'txDetail.fee': '手续费',
        'txDetail.role': '角色',
        'txDetail.leverage': '杠杆',
        'txDetail.onChainProof': '链上结算证明',
        'txDetail.zkVerified': 'ZK已验证',
        'txDetail.settlementLayer': '结算层',
        'txDetail.l1Tx': 'L1交易',
        'txDetail.viewEtherscan': '在Etherscan查看',
        'txDetail.viewEdgeChain': '在Edge Chain查看',
        'txDetail.proofStatus': '证明状态',
        'txDetail.stateRootBefore': '状态根（前）',
        'txDetail.stateRootAfter': '状态根（后）',
        'txDetail.verifyTime': '验证时间',
        'txDetail.verifyProof': '验证证明',
        'txDetail.techDetails': '技术详情',
        'txDetail.relatedInfo': '关联信息',
        'txDetail.orderId': '订单ID',
        'txDetail.cloid': '客户端订单ID',
        'txDetail.userAddress': '用户地址',
        'txDetail.counterparty': '对手方',
        'txDetail.proofVerified': 'STARK证明已验证',
        'txDetail.inputData': '输入数据',
        'txDetail.logs': '事件日志',
        'txDetail.internalTxs': '内部交易',
        'txDetail.sequenceInfo': '排序信息',
        'txDetail.sequenceNumber': '排序号',
        'txDetail.sequencedAt': '排序时间',
        
        // Batch Detail
        'batchDetail.info': '批次信息',
        'batchDetail.id': '批次ID',
        'batchDetail.createdAt': '创建时间',
        'batchDetail.sequencedAt': '排序时间',
        'batchDetail.submittedAt': '提交时间',
        'batchDetail.provenAt': '证明时间',
        'batchDetail.finalizedAt': '最终确定时间',
        'batchDetail.totalTxs': '总交易数',
        'batchDetail.settlement': '结算信息',
        'batchDetail.ethSettlement': '以太坊结算',
        'batchDetail.edgeChainSettlement': 'Edge Chain结算',
        'batchDetail.l1TxHash': 'L1交易哈希',
        'batchDetail.ethBlock': '以太坊区块',
        'batchDetail.gasUsed': 'Gas消耗',
        'batchDetail.proofType': '证明类型',
        'batchDetail.proofSize': '证明大小',
        'batchDetail.stateRoot': '状态根',
        'batchDetail.previousStateRoot': '前状态根',
        'batchDetail.txsInBatch': '批次内交易',
        'batchDetail.showing': '显示',
        'batchDetail.ofTxs': '笔交易，批次',
        'batchDetail.dataAvailability': '数据可用性',
        'batchDetail.blobSize': 'Blob大小',
        'batchDetail.compressionRatio': '压缩比',
        'batchDetail.verifierContract': '验证合约',
        'batchDetail.statusTimeline': '状态时间线',
        
        // Block Detail
        'blockDetail.info': '区块信息',
        'blockDetail.number': '区块高度',
        'blockDetail.hash': '区块哈希',
        'blockDetail.parentHash': '父区块哈希',
        'blockDetail.timestamp': '时间戳',
        'blockDetail.txCount': '交易数量',
        'blockDetail.gasUsed': 'Gas消耗',
        'blockDetail.gasLimit': 'Gas上限',
        'blockDetail.validator': '验证者',
        'blockDetail.txsInBlock': '区块内交易',
        
        // Address Page
        'address.overview': '概览',
        'address.txCount': '总交易数',
        'address.volume': '总交易量',
        'address.firstTx': '首次交易',
        'address.lastTx': '最近交易',
        'address.balance': '余额',
        'address.pnl': '已实现盈亏',
        'address.txHistory': '交易历史',
        'address.positions': '持仓',
        'address.orders': '挂单',
        'address.transfers': '转账',
        'address.totalValue': '账户总资产',
        'address.perpsAccount': '合约账户',
        'address.spotAccount': '现货账户',
        'address.predictionAccount': '预测账户',
        'address.vaultAccount': '金库账户',
        'address.noPositions': '暂无持仓',
        'address.noHoldings': '暂无持币',
        'address.noDeposits': '暂无存款',
        
        // Footer
        'footer.docs': '文档',
        'footer.api': 'API',
        'footer.support': '支持',
        'footer.terms': '条款',
        'footer.status': '系统运行正常',
        'footer.edgeChain': 'Edge Chain',
        'footer.github': 'GitHub',
        
        // Toast & Modal
        'toast.copied': '已复制到剪贴板！',
        'toast.copyFailed': '复制失败',
        'toast.exporting': '正在导出CSV...',
        'toast.exportComplete': '导出完成！',
        'toast.noResults': '未找到结果：',
        'modal.close': '关闭',
        'modal.verifyTitle': '验证ZK证明',
        'modal.verifySuccess': '证明验证成功',
        'modal.verifyDesc': '该交易已通过STARK证明技术在结算层验证。',
        'modal.verifyMethod': '验证方法',
        'modal.verifierContract': '验证合约',
        'modal.verifyBlock': '验证区块',
        'modal.techTitle': '技术详情',
        'modal.dataAvailability': '数据可用性模式',
        'modal.proofSystem': '证明系统',
        'modal.securityLevel': '安全级别',
        'modal.prover': '证明者',
        'modal.merkleTree': 'Merkle树结构',
        'modal.treeHeight': '树高度',
        'modal.leafType': '叶子类型',
        'modal.hashFunction': '哈希函数',
        
        // Requirements Page
        'nav.requirements': '需求介绍',
        'requirements.title': 'edgeX Explorer 需求介绍',
        'requirements.subtitle': '本文档描述了 edgeX Explorer 区块链浏览器的完整功能需求和页面结构',
        
        // Blocks Page (Reserved)
        'blocks.edgeChainReserved': 'Edge Chain 储备',
        'blocks.reservedTitle': 'Edge Chain 升级储备页面',
        'blocks.reservedDesc': '此页面为未来 Edge Chain 升级预留。目前 edgeX 通过批次将交易提交到以太坊主网进行结算。当 Edge Chain 上线后，此页面将展示原生区块信息。',
        'blocks.currentSettlement': '当前结算层',
        'blocks.futureSettlement': '未来结算层',
        'blocks.status': '状态',
        'blocks.comingSoon': '即将推出',
        'blocks.viewBatches': '查看当前批次',
        'blocks.previewTitle': '预览：未来区块列表',
        'blocks.previewDesc': '以下是 Edge Chain 上线后区块列表的模拟预览。',
        'blocks.validator': '验证者',
        'blocks.gasUsed': 'Gas消耗',
        'table.hash': '哈希',
        
        // Network Switch
        'network.mainnet': 'edgeX 主网',
        'network.testnet': 'edgeX 测试网',
        'network.edgeChain': 'Edge Chain（即将推出）',
        'network.switch': '切换网络',
        'network.settlementEth': '结算层: 以太坊',
        'network.settlementEdge': '结算层: Edge Chain',
        
        // Settlement Layer
        'settlement.ethereum': '以太坊主网',
        'settlement.edgeChain': 'Edge Chain',
        'settlement.current': '当前结算层',
        'settlement.future': '未来结算层 (Edge Chain)',
        'settlement.upgrade': '结算层将升级至 Edge Chain',
    }
};

// Current language
let currentLang = localStorage.getItem('edgex-lang') || 'en';

// Get translation
function t(key) {
    return translations[currentLang][key] || translations['en'][key] || key;
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('edgex-lang', lang);
    updatePageLanguage();
    
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? '中文' : 'EN';
    }
}

// Toggle language
function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'zh' : 'en');
}

// Update all text on page
function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    
    if (typeof refreshCurrentPage === 'function') {
        refreshCurrentPage();
    }
}

// Format relative time based on language
function formatTimeI18n(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    
    if (currentLang === 'zh') {
        if (diff < 1000) return '刚刚';
        if (diff < 60000) return Math.floor(diff / 1000) + '秒前';
        if (diff < 3600000) return Math.floor(diff / 60000) + '分钟前';
        if (diff < 86400000) return Math.floor(diff / 3600000) + '小时前';
        return Math.floor(diff / 86400000) + '天前';
    } else {
        if (diff < 1000) return 'Just now';
        if (diff < 60000) return Math.floor(diff / 1000) + 's ago';
        if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
        if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
        return Math.floor(diff / 86400000) + 'd ago';
    }
}

// Get translated type label
function getTypeLabel(type) {
    const key = 'type.' + type;
    return t(key) !== key ? t(key) : type;
}

// Get translated status label
function getStatusLabel(status) {
    const key = 'status.' + status;
    return t(key) !== key ? t(key) : status;
}

// Get translated side label
function getSideLabel(side) {
    const sideMap = {
        'long': 'side.long',
        'short': 'side.short',
        'buy': 'side.buy',
        'sell': 'side.sell'
    };
    return t(sideMap[side] || side);
}

// Get translated category label
function getCategoryLabel(category) {
    const key = 'category.' + category;
    return t(key) !== key ? t(key) : category;
}

// Get status description
function getStatusDescription(status) {
    const key = 'statusDesc.' + status;
    return t(key) !== key ? t(key) : '';
}
