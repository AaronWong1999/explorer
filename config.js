// Feature Configuration Manager
// Controls visibility of features across all pages

const FeatureConfig = {
    // Default configuration - all features enabled
    defaults: {
        // ============ HOME PAGE ============
        'home.stats': true,
        'home.stats.totalTxs': true,
        'home.stats.totalUsers': true,
        'home.stats.perpVolume': true,
        'home.stats.perpOI': true,
        'home.stats.spotVolume': true,
        'home.stats.tvl': true,
        'home.stats.vaultTVL': true,
        'home.stats.depositors': true,
        'home.stats.totalDeposit': true,
        'home.stats.totalWithdraw': true,
        'home.stats.totalIncome': true,
        'home.stats.totalBatches': true,
        'home.latestTxs': true,
        'home.latestTxs.hash': true,
        'home.latestTxs.type': true,
        'home.latestTxs.time': true,
        'home.latestTxs.user': true,
        'home.latestTxs.status': true,
        'home.latestBatches': true,
        'home.latestBatches.id': true,
        'home.latestBatches.time': true,
        'home.latestBatches.txns': true,
        'home.latestBatches.l1Tx': true,
        'home.latestBatches.status': true,
        'home.search': true,
        'home.search.recentSearches': true,
        'home.search.popularSearches': true,
        
        // ============ HOME - REPURCHASE ============
        'home.repurchase': true,
        'home.repurchase.address': true,
        'home.repurchase.totalAmount': true,
        'home.repurchase.totalValue': true,
        'home.repurchase.24hAmount': true,
        'home.repurchase.24hValue': true,
        'home.repurchase.24hAmountChange': true,
        'home.repurchase.24hValueChange': true,

        // ============ TRANSACTIONS PAGE ============
        'txs.statsBar': true,
        'txs.statsBar.total': true,
        'txs.statsBar.tps': true,
        'txs.statsBar.pending': true,
        'txs.statsBar.sequenced': true,
        'txs.filters': true,
        'txs.filters.type': true,
        'txs.filters.status': true,
        'txs.filters.export': true,
        'txs.table': true,
        'txs.table.hash': true,
        'txs.table.type': true,
        'txs.table.batch': true,
        'txs.table.time': true,
        'txs.table.user': true,
        'txs.table.status': true,

        // ============ TX DETAIL PAGE ============
        'txDetail.basicInfo': true,
        'txDetail.basicInfo.hash': true,
        'txDetail.basicInfo.status': true,
        'txDetail.basicInfo.time': true,
        'txDetail.basicInfo.batch': true,
        'txDetail.basicInfo.position': true,
        'txDetail.content': true,
        'txDetail.content.type': true,
        'txDetail.content.pair': true,
        'txDetail.content.side': true,
        'txDetail.content.orderType': true,
        'txDetail.content.price': true,
        'txDetail.content.size': true,
        'txDetail.content.value': true,
        'txDetail.content.fee': true,
        'txDetail.content.role': true,
        'txDetail.content.leverage': true,
        'txDetail.proof': true,
        'txDetail.proof.settlement': true,
        'txDetail.proof.batch': true,
        'txDetail.proof.l1Tx': true,
        'txDetail.proof.status': true,
        'txDetail.proof.verifier': true,
        'txDetail.proof.stateBefore': true,
        'txDetail.proof.stateAfter': true,
        'txDetail.proof.verifyTime': true,
        'txDetail.inputData': true,

        // ============ BATCHES PAGE ============
        'batches.stats': true,
        'batches.stats.latest': true,
        'batches.stats.pending': true,
        'batches.stats.proven': true,
        'batches.stats.finalized': true,
        'batches.table': true,
        'batches.table.id': true,
        'batches.table.created': true,
        'batches.table.sequenced': true,
        'batches.table.submitted': true,
        'batches.table.txCount': true,
        'batches.table.l1Hash': true,
        'batches.table.ethBlock': true,
        'batches.table.status': true,

        // ============ BATCH DETAIL PAGE ============
        'batchDetail.overview': true,
        'batchDetail.overview.id': true,
        'batchDetail.overview.status': true,
        'batchDetail.timeline': true,
        'batchDetail.timeline.created': true,
        'batchDetail.timeline.sequenced': true,
        'batchDetail.timeline.submitted': true,
        'batchDetail.timeline.proven': true,
        'batchDetail.timeline.finalized': true,
        'batchDetail.settlement': true,
        'batchDetail.settlement.layer': true,
        'batchDetail.settlement.l1Hash': true,
        'batchDetail.settlement.ethBlock': true,
        'batchDetail.settlement.stateRoot': true,
        'batchDetail.settlement.verifier': true,
        'batchDetail.transactions': true,

        // ============ ADDRESS PAGE ============
        'address.accountOverview': true,
        'address.perpsAccount': true,
        'address.spotAccount': true,
        'address.predictionAccount': true,
        'address.vaultAccount': true,
        'address.stats': true,
        'address.stats.txCount': true,
        'address.stats.volume': true,
        'address.stats.firstTx': true,
        'address.stats.lastTx': true,
        'address.filters': true,
        'address.filters.all': true,
        'address.filters.trading': true,
        'address.filters.transfers': true,
        'address.filters.liquidations': true,
        'address.filters.vault': true,
        'address.filters.account': true,
        'address.table': true,

        // ============ BLOCKS PAGE ============
        'blocks': true,
        'blocks.status': true,
        'blocks.status.current': true,
        'blocks.status.future': true,
        'blocks.status.pageStatus': true,
        'blocks.table': true,
        'blocks.table.number': true,
        'blocks.table.time': true,
        'blocks.table.txCount': true,
        'blocks.table.validator': true,
        'blocks.table.gas': true,
        'blocks.table.hash': true,

        // ============ TX TYPES ============
        'txTypes': true,
        'txTypes.perp': true,
        'txTypes.perp.perpTrade': true,
        'txTypes.perp.perpOrder': true,
        'txTypes.perp.perpCancel': true,
        'txTypes.perp.perpCancelByCloid': true,
        'txTypes.perp.perpCancelAll': true,
        'txTypes.perp.perpModify': true,
        'txTypes.perp.perpBatchModify': true,
        'txTypes.perp.perpTwap': true,
        'txTypes.perp.perpTwapCancel': true,
        'txTypes.perp.scheduleCancel': true,
        'txTypes.spot': true,
        'txTypes.spot.spotTrade': true,
        'txTypes.spot.spotOrder': true,
        'txTypes.spot.spotCancel': true,
        'txTypes.spot.spotCancelByCloid': true,
        'txTypes.spot.spotCancelAll': true,
        'txTypes.spot.spotModify': true,
        'txTypes.spot.spotBatchModify': true,
        'txTypes.liquidation': true,
        'txTypes.liquidation.liquidation': true,
        'txTypes.liquidation.adl': true,
        'txTypes.funding': true,
        'txTypes.funding.funding': true,
        'txTypes.transfers': true,
        'txTypes.transfers.deposit': true,
        'txTypes.transfers.withdraw': true,
        'txTypes.transfers.perpToSpot': true,
        'txTypes.transfers.spotToPerp': true,
        'txTypes.transfers.perpToPred': true,
        'txTypes.transfers.predToPerp': true,
        'txTypes.transfers.spotToPred': true,
        'txTypes.transfers.predToSpot': true,
        'txTypes.transfers.spotTransfer': true,
        'txTypes.transfers.internalTransfer': true,
        'txTypes.account': true,
        'txTypes.account.updateLeverage': true,
        'txTypes.account.updateMargin': true,
        'txTypes.account.setIsolated': true,
        'txTypes.account.setCross': true,
        'txTypes.account.approveAgent': true,
        'txTypes.vault': true,
        'txTypes.vault.vaultDeposit': true,
        'txTypes.vault.vaultWithdraw': true,
        'txTypes.vault.vaultClaim': true,

        // ============ STATUS DEFINITIONS ============
        'status': true,
        'status.tx': true,
        'status.tx.pending': true,
        'status.tx.sequenced': true,
        'status.tx.confirmed': true,
        'status.tx.batched': true,
        'status.tx.proven': true,
        'status.tx.finalized': true,
        'status.tx.failed': true,
        'status.batch': true,
        'status.batch.pending': true,
        'status.batch.sequenced': true,
        'status.batch.committed': true,
        'status.batch.proven': true,
        'status.batch.finalized': true,
    },

    // Current configuration (loaded from localStorage)
    current: {},

    // Initialize configuration
    init() {
        const saved = localStorage.getItem('edgex-feature-config');
        if (saved) {
            try {
                this.current = JSON.parse(saved);
                // Merge with defaults for any new features
                for (const key in this.defaults) {
                    if (!(key in this.current)) {
                        this.current[key] = this.defaults[key];
                    }
                }
            } catch (e) {
                this.current = { ...this.defaults };
            }
        } else {
            this.current = { ...this.defaults };
        }
        return this;
    },

    // Save configuration to localStorage
    save() {
        localStorage.setItem('edgex-feature-config', JSON.stringify(this.current));
        this.applyAll();
        showToast(currentLang === 'zh' ? '配置已保存' : 'Configuration saved', 'success');
    },

    // Reset to defaults
    reset() {
        this.current = { ...this.defaults };
        localStorage.removeItem('edgex-feature-config');
        this.applyAll();
        this.updateCheckboxes();
        showToast(currentLang === 'zh' ? '已恢复默认配置' : 'Reset to defaults', 'success');
    },

    // Check if a feature is enabled
    isEnabled(featureId) {
        return this.current[featureId] !== false;
    },

    // Toggle a feature
    toggle(featureId, enabled) {
        this.current[featureId] = enabled;
        // If parent is disabled, disable all children
        if (!enabled) {
            const prefix = featureId + '.';
            for (const key in this.current) {
                if (key.startsWith(prefix)) {
                    this.current[key] = false;
                }
            }
        }
        // If child is enabled, enable parent
        if (enabled) {
            const parts = featureId.split('.');
            for (let i = 1; i < parts.length; i++) {
                const parentKey = parts.slice(0, i).join('.');
                this.current[parentKey] = true;
            }
        }
        this.updateCheckboxes();
        // Update count display
        if (typeof updateConfigCount === 'function') {
            updateConfigCount();
        }
    },

    // Update all checkboxes to reflect current state
    updateCheckboxes() {
        document.querySelectorAll('.feature-checkbox').forEach(cb => {
            const featureId = cb.dataset.feature;
            if (featureId) {
                cb.checked = this.isEnabled(featureId);
            }
        });
    },

    // Apply configuration to all pages
    applyAll() {
        // Apply to elements with data-feature attribute
        // Exclude elements inside requirements page (they are for configuration, not display)
        document.querySelectorAll('[data-feature]').forEach(el => {
            // Skip elements inside requirements page (configuration checkboxes)
            if (el.closest('#page-requirements') || el.closest('.requirements-section')) {
                return;
            }
            
            const featureId = el.dataset.feature;
            if (this.isEnabled(featureId)) {
                el.style.display = '';
                el.classList.remove('feature-hidden');
            } else {
                el.style.display = 'none';
                el.classList.add('feature-hidden');
            }
        });

        // Apply to table columns
        this.applyTableColumns();
    },

    // Apply table column visibility
    applyTableColumns() {
        // Home - Latest Transactions
        this.applyColumnVisibility('latest-transactions', {
            0: 'home.latestTxs.hash',
            1: 'home.latestTxs.type',
            2: 'home.latestTxs.time',
            3: 'home.latestTxs.user',
            4: 'home.latestTxs.status'
        });

        // Home - Latest Batches
        this.applyColumnVisibility('latest-batches', {
            0: 'home.latestBatches.id',
            1: 'home.latestBatches.time',
            2: 'home.latestBatches.txns',
            3: 'home.latestBatches.l1Tx',
            4: 'home.latestBatches.status'
        });

        // Transactions page
        this.applyColumnVisibility('all-transactions', {
            0: 'txs.table.hash',
            1: 'txs.table.type',
            2: 'txs.table.batch',
            3: 'txs.table.time',
            4: 'txs.table.user',
            5: 'txs.table.status'
        });

        // Batches page
        this.applyColumnVisibility('all-batches', {
            0: 'batches.table.id',
            1: 'batches.table.created',
            2: 'batches.table.sequenced',
            3: 'batches.table.submitted',
            4: 'batches.table.txns',
            5: 'batches.table.l1Tx',
            6: 'batches.table.ethBlock',
            7: 'batches.table.status'
        });
    },

    // Apply column visibility to a specific table
    applyColumnVisibility(tableId, columnMap) {
        const tbody = document.getElementById(tableId);
        if (!tbody) return;

        const table = tbody.closest('table');
        if (!table) return;

        // Apply to header
        const headerRow = table.querySelector('thead tr');
        if (headerRow) {
            const ths = headerRow.querySelectorAll('th');
            for (const [index, featureId] of Object.entries(columnMap)) {
                const th = ths[parseInt(index)];
                if (th) {
                    th.style.display = this.isEnabled(featureId) ? '' : 'none';
                }
            }
        }

        // Apply to body rows
        const rows = tbody.querySelectorAll('tr');
        rows.forEach(row => {
            const tds = row.querySelectorAll('td');
            for (const [index, featureId] of Object.entries(columnMap)) {
                const td = tds[parseInt(index)];
                if (td) {
                    td.style.display = this.isEnabled(featureId) ? '' : 'none';
                }
            }
        });
    },

    // Get feature count summary
    getSummary() {
        let enabled = 0;
        let total = 0;
        for (const key in this.defaults) {
            total++;
            if (this.isEnabled(key)) enabled++;
        }
        return { enabled, total };
    },

    // Export configuration as JSON string
    exportJSON() {
        const jsonStr = JSON.stringify(this.current, null, 2);
        const textarea = document.getElementById('config-json-textarea');
        if (textarea) {
            textarea.value = jsonStr;
            textarea.select();
            document.execCommand('copy');
            showToast(currentLang === 'zh' ? '配置已复制到剪贴板' : 'Config copied to clipboard', 'success');
        }
    },

    // Import configuration from JSON string
    importJSON() {
        const textarea = document.getElementById('config-json-textarea');
        if (!textarea || !textarea.value.trim()) {
            showToast(currentLang === 'zh' ? '请先粘贴配置JSON' : 'Please paste config JSON first', 'error');
            return;
        }
        
        try {
            const imported = JSON.parse(textarea.value);
            // Validate imported config
            if (typeof imported !== 'object' || imported === null) {
                throw new Error('Invalid config format');
            }
            // Merge with defaults
            this.current = { ...this.defaults };
            for (const key in imported) {
                if (key in this.defaults) {
                    this.current[key] = imported[key];
                }
            }
            this.save();
            this.updateCheckboxes();
            if (typeof updateConfigCount === 'function') {
                updateConfigCount();
            }
            showToast(currentLang === 'zh' ? '配置导入成功' : 'Config imported successfully', 'success');
        } catch (e) {
            showToast(currentLang === 'zh' ? '配置格式错误，请检查JSON' : 'Invalid JSON format', 'error');
        }
    },

    // Update JSON textarea with current config
    updateJSONTextarea() {
        const textarea = document.getElementById('config-json-textarea');
        if (textarea) {
            textarea.value = JSON.stringify(this.current, null, 2);
        }
    }
};

// Initialize on load
FeatureConfig.init();
