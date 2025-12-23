// edgeX Explorer Application
// Comprehensive support for all transaction types and statuses

// State
let currentPage = 'home';
let feedFilter = 'all';
let addressFilter = 'all';
let updateIntervals = [];
let recentSearches = JSON.parse(localStorage.getItem('edgex-recent-searches') || '[]');
let searchTimeout = null;
let isSearchFocused = false;
let currentTheme = 'light';

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme (default: dark)
    const savedTheme = localStorage.getItem('edgex-theme') || 'dark';
    setTheme(savedTheme);
    
    const savedLang = localStorage.getItem('edgex-lang') || 'zh';
    setLanguage(savedLang);
    
    // Check URL hash for page navigation
    const initialPage = getPageFromHash() || 'home';
    navigateTo(initialPage);
    
    document.addEventListener('click', handleOutsideClick);
    
    // Initialize feature config
    initFeatureConfig();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
});

// Get page name from URL hash
function getPageFromHash() {
    const hash = window.location.hash.slice(1); // Remove #
    if (!hash) return null;
    
    const validPages = ['home', 'transactions', 'batches', 'blocks', 'requirements'];
    if (validPages.includes(hash)) {
        return hash;
    }
    // Handle detail pages
    if (hash.startsWith('tx/') || hash.startsWith('batch/') || hash.startsWith('address/')) {
        return hash;
    }
    return null;
}

// Get current hash for comparison
function getCurrentHashPage() {
    const hash = window.location.hash.slice(1);
    if (!hash) return 'home';
    
    // For detail pages, return the full hash path
    if (hash.startsWith('tx/') || hash.startsWith('batch/') || hash.startsWith('address/')) {
        return hash;
    }
    return hash;
}

// Handle hash changes
function handleHashChange() {
    const hashPage = getPageFromHash();
    if (!hashPage) return;
    
    // Get the current actual page state
    let currentHashPage = currentPage;
    if (currentPage === 'tx-detail') {
        const hash = document.getElementById('tx-detail-hash');
        if (hash) currentHashPage = 'tx/' + hash.textContent;
    } else if (currentPage === 'batch-detail') {
        const id = document.getElementById('batch-detail-id');
        if (id) currentHashPage = 'batch/' + id.textContent.replace('#', '');
    } else if (currentPage === 'address') {
        const addr = document.getElementById('address-hash');
        if (addr) currentHashPage = 'address/' + addr.textContent;
    }
    
    // Only navigate if the hash actually changed
    if (hashPage !== currentHashPage) {
        navigateTo(hashPage);
    }
}

// Update URL hash when navigating
function updateUrlHash(page) {
    const newHash = '#' + page;
    if (window.location.hash !== newHash) {
        history.pushState(null, '', newHash);
    }
}

// Initialize feature configuration
function initFeatureConfig() {
    // Update checkboxes to match saved config
    FeatureConfig.updateCheckboxes();
    // Update config count display
    updateConfigCount();
    // Apply configuration to all pages
    FeatureConfig.applyAll();
    // Update JSON textarea
    FeatureConfig.updateJSONTextarea();
}

// Update config count display
function updateConfigCount() {
    const summary = FeatureConfig.getSummary();
    const text = currentLang === 'zh' 
        ? `已启用: ${summary.enabled}/${summary.total}` 
        : `Enabled: ${summary.enabled}/${summary.total}`;
    
    const topCount = document.getElementById('config-count-top');
    if (topCount) topCount.textContent = text;
    
    // Also update JSON textarea when count changes
    FeatureConfig.updateJSONTextarea();
}

// Theme Toggle
function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('edgex-theme', theme);
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('theme-toggle').querySelector('.theme-icon').textContent = '🌙';
    } else {
        document.documentElement.removeAttribute('data-theme');
        document.getElementById('theme-toggle').querySelector('.theme-icon').textContent = '☀️';
    }
}

// Handle clicks outside dropdowns
function handleOutsideClick(e) {
    const networkSelector = document.querySelector('.network-selector');
    if (networkSelector && !networkSelector.contains(e.target)) {
        networkSelector.classList.remove('open');
    }
    
    const searchBox = document.getElementById('search-box');
    if (searchBox && !searchBox.contains(e.target)) {
        hideSearchDropdown();
    }
}

// Network Switching
function toggleNetworkMenu() {
    const selector = document.querySelector('.network-selector');
    selector.classList.toggle('open');
}

function switchNetwork(network) {
    const options = document.querySelectorAll('.network-option');
    options.forEach(opt => opt.classList.remove('active'));
    
    const currentNetwork = document.getElementById('current-network');
    const settlementInfo = document.getElementById('settlement-info');
    
    if (network === 'mainnet') {
        currentNetwork.textContent = t('nav.mainnet');
        options[0].classList.add('active');
        globalState.settlementLayer.current = 'ethereum';
        if (settlementInfo) settlementInfo.textContent = t('network.settlementEth');
        showToast(currentLang === 'zh' ? '已切换到主网' : 'Switched to Mainnet', 'success');
    } else if (network === 'testnet') {
        currentNetwork.textContent = t('nav.testnet');
        options[1].classList.add('active');
        globalState.settlementLayer.current = 'ethereum';
        if (settlementInfo) settlementInfo.textContent = t('network.settlementEth');
        showToast(currentLang === 'zh' ? '已切换到测试网' : 'Switched to Testnet', 'success');
    } else if (network === 'edgechain') {
        currentNetwork.textContent = 'Edge Chain';
        options[2].classList.add('active');
        globalState.settlementLayer.current = 'edgechain';
        if (settlementInfo) settlementInfo.textContent = t('network.settlementEdge');
        showToast(currentLang === 'zh' ? '已切换到 Edge Chain' : 'Switched to Edge Chain', 'success');
    }
    
    document.querySelector('.network-selector').classList.remove('open');
}

// Navigation
function navigateTo(page, data = null) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Handle hash-based navigation for detail pages
    let actualPage = page;
    let pageData = data;
    
    if (typeof page === 'string') {
        if (page.startsWith('tx/')) {
            actualPage = 'tx-detail';
            pageData = page.slice(3);
        } else if (page.startsWith('batch/')) {
            actualPage = 'batch-detail';
            pageData = page.slice(6);
        } else if (page.startsWith('address/')) {
            actualPage = 'address';
            pageData = page.slice(8);
        }
    }
    
    const targetPage = document.getElementById(`page-${actualPage}`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = actualPage;
        
        // Update URL hash
        let hashPage = actualPage;
        if (actualPage === 'tx-detail' && pageData) {
            hashPage = 'tx/' + pageData;
        } else if (actualPage === 'batch-detail' && pageData) {
            hashPage = 'batch/' + pageData;
        } else if (actualPage === 'address' && pageData) {
            hashPage = 'address/' + pageData;
        }
        updateUrlHash(hashPage);
        
        switch (actualPage) {
            case 'home':
                initHomePage();
                break;
            case 'transactions':
                initTransactionsPage();
                break;
            case 'batches':
                initBatchesPage();
                break;
            case 'blocks':
                initBlocksPage();
                break;
            case 'requirements':
                initRequirementsPage();
                break;
            case 'tx-detail':
                initTxDetailPage(pageData);
                break;
            case 'batch-detail':
                initBatchDetailPage(pageData);
                break;
            case 'address':
                initAddressPage(pageData);
                break;
        }
    }
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.textContent === 'Explorer' && ['home', 'transactions', 'batches', 'blocks'].includes(actualPage)) {
            link.classList.add('active');
        }
    });
    
    window.scrollTo(0, 0);
}

// Initialize requirements page
function initRequirementsPage() {
    // Update checkboxes and JSON textarea when entering requirements page
    FeatureConfig.updateCheckboxes();
    updateConfigCount();
    FeatureConfig.updateJSONTextarea();
}

// Refresh current page for language change
function refreshCurrentPage() {
    switch (currentPage) {
        case 'home':
            updateLatestTransactions();
            updateLatestBatches();
            updateLiveFeed();
            break;
        case 'transactions':
            loadAllTransactions(globalState.currentPage.tx);
            break;
        case 'batches':
            loadAllBatches(globalState.currentPage.batch);
            break;
    }
}

// Status icon and color helpers
function getStatusIcon(status) {
    const statusInfo = TX_STATUS.find(s => s.status === status) || 
                       BATCH_STATUS.find(s => s.status === status);
    return statusInfo ? statusInfo.icon : '•';
}

function getStatusColor(status) {
    const statusInfo = TX_STATUS.find(s => s.status === status) || 
                       BATCH_STATUS.find(s => s.status === status);
    return statusInfo ? statusInfo.color : '#888';
}

function getFeedIcon(type) {
    const typeInfo = TX_TYPES.find(t => t.type === type);
    return typeInfo ? typeInfo.icon : '•';
}

// Home Page
function initHomePage() {
    updateStats();
    updateLatestTransactions();
    updateLatestBatches();
    updateLiveFeed();
    initSearchTypeDropdowns();
    initPopularSearches();
    updateRecentSearches();
    startRealTimeUpdates();
}

function updateStats() {
    // Row 1: Explorer Stats + Perp/Spot
    document.getElementById('stat-total-txs').textContent = formatNumber(globalState.totalTransactions);
    document.getElementById('stat-total-users').textContent = formatNumber(globalState.totalUsers);
    document.getElementById('stat-perp-volume').textContent = formatUSD(globalState.perpVolume);
    document.getElementById('stat-perp-oi').textContent = formatUSD(globalState.perpOI);
    document.getElementById('stat-spot-volume').textContent = formatUSD(globalState.spotVolume);
    document.getElementById('stat-tvl').textContent = formatUSD(globalState.totalTVL);
    
    // Row 2: Vault + Deposit Stats
    document.getElementById('stat-vault-tvl').textContent = formatUSD(globalState.vaultTVL);
    document.getElementById('stat-distinct-depositors').textContent = formatNumber(globalState.distinctDepositors);
    document.getElementById('stat-total-deposit').textContent = formatUSD(globalState.totalDeposit);
    document.getElementById('stat-total-withdraw').textContent = formatUSD(globalState.totalWithdraw);
    document.getElementById('stat-total-income').textContent = formatUSD(globalState.totalIncome);
    document.getElementById('stat-total-batches').textContent = formatNumber(globalState.totalBatches);
    
    // Update Repurchase Stats
    updateRepurchaseStats();
}

function updateRepurchaseStats() {
    const repurchase = globalState.repurchase;
    
    // Set address link
    const addressLink = document.getElementById('repurchase-address');
    if (addressLink) {
        addressLink.dataset.address = repurchase.address;
    }
    
    // Total amount (format as M)
    const totalAmountEl = document.getElementById('repurchase-total-amount');
    if (totalAmountEl) {
        totalAmountEl.textContent = formatNumber(repurchase.totalAmount);
    }
    
    // Total value
    const totalValueEl = document.getElementById('repurchase-total-value');
    if (totalValueEl) {
        totalValueEl.textContent = '$' + repurchase.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    
    // 24h amount
    const amount24hEl = document.getElementById('repurchase-24h-amount');
    if (amount24hEl) {
        amount24hEl.textContent = formatNumber(repurchase.amount24h);
    }
    
    // 24h value
    const value24hEl = document.getElementById('repurchase-24h-value');
    if (value24hEl) {
        value24hEl.textContent = '$' + repurchase.value24h.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    
    // 24h amount change
    const amountChangeEl = document.getElementById('repurchase-24h-amount-change');
    if (amountChangeEl) {
        const amountChange = repurchase.amountChange24h;
        amountChangeEl.textContent = (amountChange >= 0 ? '↑ +' : '↓ ') + Math.abs(amountChange).toFixed(2) + '%';
        amountChangeEl.className = 'repurchase-change ' + (amountChange >= 0 ? 'positive' : 'negative');
    }
    
    // 24h value change
    const valueChangeEl = document.getElementById('repurchase-24h-value-change');
    if (valueChangeEl) {
        const valueChange = repurchase.valueChange24h;
        valueChangeEl.textContent = (valueChange >= 0 ? '↑ +' : '↓ ') + Math.abs(valueChange).toFixed(2) + '%';
        valueChangeEl.className = 'repurchase-change ' + (valueChange >= 0 ? 'positive' : 'negative');
    }
}

function updateLatestTransactions() {
    const tbody = document.getElementById('latest-transactions');
    const txs = getTransactions(1, 10).data;
    
    tbody.innerHTML = txs.map(tx => `
        <tr onclick="viewTransaction('${tx.hash}')">
            <td class="hash-cell">${truncateHash(tx.hash)}</td>
            <td><span class="type-cell ${tx.type}" title="${getTypeLabel(tx.type)}">${tx.typeIcon} ${getTypeLabel(tx.type)}</span></td>
            <td class="time-cell">${formatTimeI18n(tx.timestamp)}</td>
            <td class="address-cell">${truncateHash(tx.user, 6, 4)}</td>
            <td><span class="status-cell ${tx.status}" style="--status-color: ${tx.statusColor}">${tx.statusIcon} ${getStatusLabel(tx.status)}</span></td>
        </tr>
    `).join('');
}

function updateLatestBatches() {
    const tbody = document.getElementById('latest-batches');
    const batches = getBatches(1, 10).data;
    
    tbody.innerHTML = batches.map(batch => `
        <tr onclick="viewBatch(${batch.id})">
            <td class="hash-cell">#${batch.id}</td>
            <td class="time-cell">${formatTimeI18n(batch.createdAt)}</td>
            <td>${batch.txCount.toLocaleString()}</td>
            <td class="hash-cell">${truncateHash(batch.l1TxHash)}</td>
            <td><span class="status-cell ${batch.status}" style="--status-color: ${batch.statusColor}">${batch.statusIcon} ${getStatusLabel(batch.status)}</span></td>
        </tr>
    `).join('');
}

function updateLiveFeed() {
    // Live feed has been removed, function kept for compatibility
    return;
}

function setFeedFilter(filter, btn) {
    feedFilter = filter;
    document.querySelectorAll('.feed-btn').forEach(b => b.classList.remove('active'));
    if (btn) {
        btn.classList.add('active');
    } else if (event && event.target) {
        event.target.classList.add('active');
    }
    updateLiveFeed();
}

// Initialize search type dropdowns with all types and statuses
function initSearchTypeDropdowns() {
    // Populate type filter dropdown in search
    const searchTypesContainer = document.getElementById('search-types');
    if (searchTypesContainer) {
        const categories = getTxCategories();
        searchTypesContainer.innerHTML = categories.map(cat => `
            <span class="search-type-item" onclick="filterSearchByCategory('${cat.id}')">${currentLang === 'zh' ? cat.labelZh : cat.label}</span>
        `).join('');
    }
    
    // Populate status filter dropdown in search
    const searchStatusContainer = document.getElementById('search-statuses');
    if (searchStatusContainer) {
        const statuses = getAllTxStatuses();
        searchStatusContainer.innerHTML = statuses.map(s => `
            <span class="search-status-item ${s.status}" onclick="filterSearchByStatus('${s.status}')">${s.icon} ${getStatusLabel(s.status)}</span>
        `).join('');
    }
}

// Real-time Updates
function startRealTimeUpdates() {
    updateIntervals.forEach(clearInterval);
    updateIntervals = [];
    
    // Add new transactions frequently with diverse types
    const txInterval = setInterval(() => {
        const newTx = addNewTransaction();
        
        if (currentPage === 'home') {
            const tbody = document.getElementById('latest-transactions');
            const rows = tbody.querySelectorAll('tr');
            if (rows.length > 0) {
                rows[0].classList.add('new-row');
            }
            updateLatestTransactions();
            updateLiveFeed();
            updateStats();
        } else if (currentPage === 'transactions') {
            updateTransactionsPageRealtime(newTx);
        }
    }, 300 + Math.random() * 700);
    updateIntervals.push(txInterval);
    
    // Add special events with various types
    const specialEventInterval = setInterval(() => {
        const specialTypes = ['deposit', 'withdraw', 'liquidation', 'vaultDeposit', 'stake', 'delegate', 'updateLeverage'];
        const randomType = specialTypes[Math.floor(Math.random() * specialTypes.length)];
        
        const tx = generateTransaction();
        const typeInfo = TX_TYPES.find(t => t.type === randomType);
        if (typeInfo) {
            tx.type = typeInfo.type;
            tx.typeLabel = typeInfo.label;
            tx.typeIcon = typeInfo.icon;
            tx.category = typeInfo.category;
        }
        
        globalState.transactions.unshift(tx);
        if (globalState.transactions.length > 1000) {
            globalState.transactions.pop();
        }
        
        if (currentPage === 'home') {
            updateLiveFeed();
        } else if (currentPage === 'transactions') {
            updateTransactionsPageRealtime(tx);
        }
    }, 3000 + Math.random() * 5000);
    updateIntervals.push(specialEventInterval);
    
    // Add new batch
    const batchInterval = setInterval(() => {
        const newBatch = addNewBatch();
        
        if (currentPage === 'home') {
            updateLatestBatches();
            updateStats();
        } else if (currentPage === 'batches') {
            updateBatchesPageRealtime(newBatch);
        }
    }, 20000 + Math.random() * 10000);
    updateIntervals.push(batchInterval);
    
    // Update stats
    const statsInterval = setInterval(() => {
        globalState.currentTPS = Math.floor(800 + Math.random() * 800);
        globalState.activeAddresses += Math.floor(Math.random() * 5);
        
        if (currentPage === 'home') {
            updateStats();
        }
    }, 3000);
    updateIntervals.push(statsInterval);
}

// Real-time update for transactions page
function updateTransactionsPageRealtime(newTx) {
    if (globalState.currentPage.tx !== 1) return;
    
    const typeFilter = document.getElementById('tx-type-filter')?.value || 'all';
    const statusFilter = document.getElementById('tx-status-filter')?.value || 'all';
    const pairFilter = document.getElementById('tx-pair-filter')?.value || 'all';
    
    if (typeFilter !== 'all' && newTx.type !== typeFilter) return;
    if (statusFilter !== 'all' && newTx.status !== statusFilter) return;
    if (pairFilter !== 'all' && newTx.pair !== pairFilter) return;
    
    const tbody = document.getElementById('all-transactions');
    if (!tbody) return;
    
    const newRow = document.createElement('tr');
    newRow.className = 'new-row highlight-new';
    newRow.onclick = () => viewTransaction(newTx.hash);
    newRow.innerHTML = `
        <td class="hash-cell">${truncateHash(newTx.hash)}</td>
        <td><span class="type-cell ${newTx.type}">${newTx.typeIcon} ${getTypeLabel(newTx.type)}</span></td>
        <td>${newTx.pair}</td>
        <td class="side-cell ${newTx.side}">${getSideLabel(newTx.side)}</td>
        <td>${newTx.priceFormatted}</td>
        <td>${newTx.sizeFormatted}</td>
        <td>${newTx.valueFormatted}</td>
        <td class="time-cell">${formatTimeI18n(newTx.timestamp)}</td>
        <td class="address-cell">${truncateHash(newTx.user, 6, 4)}</td>
        <td><span class="status-cell ${newTx.status}" style="--status-color: ${newTx.statusColor}">${newTx.statusIcon} ${getStatusLabel(newTx.status)}</span></td>
    `;
    
    tbody.insertBefore(newRow, tbody.firstChild);
    if (tbody.children.length > 20) {
        tbody.removeChild(tbody.lastChild);
    }
    
    updateTransactionCounter();
}

// Real-time update for batches page
function updateBatchesPageRealtime(newBatch) {
    if (globalState.currentPage.batch !== 1) return;
    
    const statusFilter = document.getElementById('batch-status-filter')?.value || 'all';
    if (statusFilter !== 'all' && newBatch.status !== statusFilter) return;
    
    const tbody = document.getElementById('all-batches');
    if (!tbody) return;
    
    const newRow = document.createElement('tr');
    newRow.className = 'new-row highlight-new';
    newRow.onclick = () => viewBatch(newBatch.id);
    newRow.innerHTML = `
        <td class="hash-cell">#${newBatch.id}</td>
        <td class="time-cell">${newBatch.createdAtFormatted}</td>
        <td class="time-cell">${newBatch.sequencedAtFormatted}</td>
        <td class="time-cell">${newBatch.submittedAtFormatted}</td>
        <td>${newBatch.txCount.toLocaleString()}</td>
        <td class="hash-cell">${truncateHash(newBatch.l1TxHash)}</td>
        <td>#${newBatch.ethBlock.toLocaleString()}</td>
        <td><span class="status-cell ${newBatch.status}" style="--status-color: ${newBatch.statusColor}">${newBatch.statusIcon} ${getStatusLabel(newBatch.status)}</span></td>
    `;
    
    tbody.insertBefore(newRow, tbody.firstChild);
    if (tbody.children.length > 20) {
        tbody.removeChild(tbody.lastChild);
    }
    
    updateBatchStatuses();
    updateBatchesPageStats();
}

// Update batch statuses to show progression
function updateBatchStatuses() {
    const tbody = document.getElementById('all-batches');
    if (!tbody) return;
    
    const rows = tbody.querySelectorAll('tr');
    rows.forEach((row, index) => {
        const statusCell = row.querySelector('.status-cell');
        if (!statusCell) return;
        
        const currentStatus = statusCell.className.split(' ')[1];
        let newStatus = null;
        
        if (index > 0 && index < 3) {
            if (currentStatus === 'pending') newStatus = { status: 'sequenced', icon: '📋', label: 'Sequenced' };
            else if (currentStatus === 'sequenced') newStatus = { status: 'committed', icon: '📦', label: 'Committed' };
        } else if (index >= 3 && index < 6) {
            if (currentStatus === 'committed') newStatus = { status: 'proven', icon: '🔐', label: 'Proven' };
        } else if (index >= 6) {
            if (currentStatus === 'proven') newStatus = { status: 'finalized', icon: '✓✓', label: 'Finalized' };
        }
        
        if (newStatus) {
            const statusInfo = BATCH_STATUS.find(s => s.status === newStatus.status);
            statusCell.className = `status-cell ${newStatus.status}`;
            statusCell.style.setProperty('--status-color', statusInfo?.color || '#888');
            statusCell.innerHTML = `${newStatus.icon} ${getStatusLabel(newStatus.status)}`;
            row.classList.add('status-updated');
        }
    });
}

function updateTransactionCounter() {
    const totalEl = document.getElementById('tx-page-total');
    if (totalEl) {
        totalEl.textContent = formatNumber(globalState.totalTransactions);
        totalEl.classList.add('flash-update');
        setTimeout(() => totalEl.classList.remove('flash-update'), 500);
    }
}

// Search Functions
function showSearchDropdown() {
    const dropdown = document.getElementById('search-dropdown');
    dropdown.classList.add('show');
    isSearchFocused = true;
    updateRecentSearches();
}

function hideSearchDropdown() {
    const dropdown = document.getElementById('search-dropdown');
    dropdown.classList.remove('show');
    isSearchFocused = false;
}

function updateRecentSearches() {
    const container = document.getElementById('recent-searches');
    const section = document.getElementById('recent-searches-section');
    
    if (recentSearches.length === 0) {
        section.style.display = 'none';
        return;
    }
    
    section.style.display = 'block';
    container.innerHTML = recentSearches.slice(0, 5).map(item => `
        <span class="recent-search-item" onclick="quickSearch('${item.query}')">
            ${truncateHash(item.query, 8, 6)}
            <span class="remove" onclick="event.stopPropagation(); removeRecentSearch('${item.query}')">×</span>
        </span>
    `).join('');
}

function initPopularSearches() {
    const container = document.getElementById('popular-searches');
    if (!container) return;
    
    // Get unique addresses from recent transactions (simulating 24h hot addresses)
    const hotAddresses = globalState.transactions
        .slice(0, 50)
        .map(tx => tx.user)
        .filter((addr, i, arr) => arr.indexOf(addr) === i)
        .slice(0, 5);
    
    container.innerHTML = hotAddresses.map(addr => `
        <span class="popular-search-item" onclick="quickSearch('${addr}')">${truncateHash(addr, 6, 4)}</span>
    `).join('');
}

function addRecentSearch(query, type) {
    recentSearches = recentSearches.filter(s => s.query !== query);
    recentSearches.unshift({ query, type, time: Date.now() });
    recentSearches = recentSearches.slice(0, 10);
    localStorage.setItem('edgex-recent-searches', JSON.stringify(recentSearches));
}

function removeRecentSearch(query) {
    recentSearches = recentSearches.filter(s => s.query !== query);
    localStorage.setItem('edgex-recent-searches', JSON.stringify(recentSearches));
    updateRecentSearches();
}

function quickSearch(query) {
    document.getElementById('search-input').value = query;
    performSearch();
}

function handleSearchInput(event) {
    const query = event.target.value;
    
    clearTimeout(searchTimeout);
    
    if (query.length < 2) {
        document.getElementById('search-results-section').style.display = 'none';
        return;
    }
    
    document.getElementById('search-results-section').style.display = 'block';
    document.getElementById('search-results').innerHTML = `
        <div class="search-result-item">
            <span class="search-result-icon">⏳</span>
            <div class="search-result-content">
                <div class="search-result-title">${t('search.searching')}</div>
            </div>
        </div>
    `;
    
    searchTimeout = setTimeout(() => {
        performLiveSearch(query);
    }, 300);
}

function performLiveSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    const results = [];
    const queryLower = query.toLowerCase();
    
    // Search by 0x prefix - could be tx hash or address (case insensitive)
    if (queryLower.startsWith('0x')) {
        // If length matches address (42 chars), prioritize address
        if (query.length === 42) {
            results.push({
                type: 'address',
                icon: '👤',
                title: truncateHash(query, 10, 8),
                subtitle: t('search.address'),
                badge: 'address',
                action: () => viewAddress(query.toLowerCase())
            });
        } 
        // If length matches tx hash (66 chars), show as tx
        else if (query.length === 66) {
            results.push({
                type: 'tx',
                icon: '📄',
                title: truncateHash(query, 10, 8),
                subtitle: t('search.txHash'),
                badge: 'tx',
                action: () => viewTransaction(query.toLowerCase())
            });
        }
        // For partial input, show suggestions from existing data
        else if (query.length >= 4) {
            // Find matching transactions
            const matchingTxs = globalState.transactions.filter(tx => 
                tx.hash.toLowerCase().includes(queryLower)
            ).slice(0, 2);
            
            matchingTxs.forEach(tx => {
                results.push({
                    type: 'tx',
                    icon: '📄',
                    title: truncateHash(tx.hash, 10, 8),
                    subtitle: `${tx.typeIcon} ${getTypeLabel(tx.type)} • ${tx.pair}`,
                    badge: 'tx',
                    action: () => viewTransaction(tx.hash)
                });
            });
            
            // Find matching addresses
            const matchingAddrs = globalState.transactions
                .map(tx => tx.user)
                .filter((addr, i, arr) => arr.indexOf(addr) === i)
                .filter(addr => addr.toLowerCase().includes(queryLower))
                .slice(0, 2);
            
            matchingAddrs.forEach(addr => {
                results.push({
                    type: 'address',
                    icon: '👤',
                    title: truncateHash(addr, 10, 8),
                    subtitle: t('search.address'),
                    badge: 'address',
                    action: () => viewAddress(addr)
                });
            });
        }
    } 
    // Search by batch ID (# prefix or numeric)
    else if (query.startsWith('#') || !isNaN(parseInt(query))) {
        const num = parseInt(query.replace('#', ''));
        if (!isNaN(num) && num > 0) {
            results.push({
                type: 'batch',
                icon: '📦',
                title: '#' + num,
                subtitle: t('search.batch'),
                badge: 'batch',
                action: () => viewBatch(num)
            });
            
            // Also suggest nearby batches
            if (num <= globalState.latestBatch) {
                const nearbyBatches = [num + 1, num + 2].filter(n => n <= globalState.latestBatch);
                nearbyBatches.forEach(n => {
                    results.push({
                        type: 'batch',
                        icon: '📦',
                        title: '#' + n,
                        subtitle: t('search.batch'),
                        badge: 'batch',
                        action: () => viewBatch(n)
                    });
                });
            }
        }
    }
    // General text search - show sample results from each type
    else if (query.length >= 2) {
        // Show recent transactions
        const recentTxs = globalState.transactions.slice(0, 2);
        recentTxs.forEach(tx => {
            results.push({
                type: 'tx',
                icon: '📄',
                title: truncateHash(tx.hash, 10, 8),
                subtitle: `${tx.typeIcon} ${getTypeLabel(tx.type)} • ${tx.pair}`,
                badge: 'tx',
                action: () => viewTransaction(tx.hash)
            });
        });
        
        // Show a sample address
        if (globalState.transactions.length > 0) {
            const addr = globalState.transactions[0].user;
            results.push({
                type: 'address',
                icon: '👤',
                title: truncateHash(addr, 10, 8),
                subtitle: t('search.address'),
                badge: 'address',
                action: () => viewAddress(addr)
            });
        }
        
        // Show recent batches
        results.push({
            type: 'batch',
            icon: '📦',
            title: '#' + globalState.latestBatch,
            subtitle: t('search.batch'),
            badge: 'batch',
            action: () => viewBatch(globalState.latestBatch)
        });
    }
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="search-result-item">
                <span class="search-result-icon">🔍</span>
                <div class="search-result-content">
                    <div class="search-result-title">${t('search.noResults')}</div>
                </div>
            </div>
        `;
        return;
    }
    
    resultsContainer.innerHTML = results.map((r, i) => `
        <div class="search-result-item" onclick="searchResults[${i}].action()">
            <span class="search-result-icon">${r.icon}</span>
            <div class="search-result-content">
                <div class="search-result-title">${r.title}</div>
                <div class="search-result-subtitle">${r.subtitle}</div>
            </div>
            <span class="search-result-badge ${r.badge}">${r.badge}</span>
        </div>
    `).join('');
    
    window.searchResults = results;
}

function setSearchType(type) {
    const input = document.getElementById('search-input');
    const placeholders = {
        'tx': '0x...',
        'address': '0x...',
        'batch': '#12345'
    };
    input.placeholder = placeholders[type] || t('search.placeholder');
    input.focus();
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

function performSearch() {
    const query = document.getElementById('search-input').value.trim();
    if (!query) return;
    
    hideSearchDropdown();
    
    const result = searchData(query);
    
    switch (result.type) {
        case 'transaction':
            addRecentSearch(query, 'tx');
            viewTransaction(result.data.hash);
            break;
        case 'batch':
            addRecentSearch(query, 'batch');
            viewBatch(result.data.id);
            break;
        case 'address':
            addRecentSearch(query, 'address');
            viewAddress(result.data.address);
            break;
        case 'notfound':
            showToast(t('toast.noResults') + ' ' + query, 'error');
            break;
    }
    
    document.getElementById('search-input').value = '';
}

// Transactions Page
function initTransactionsPage() {
    populateTransactionFilters();
    loadAllTransactions();
    updateTransactionsPageStats();
    startTransactionsPageUpdates();
}

function populateTransactionFilters() {
    // Populate type filter with categories
    const typeFilter = document.getElementById('tx-type-filter');
    if (typeFilter) {
        const types = getAllTxTypes();
        const categories = {
            'perp': { label: '── Perp Trading ──', types: [] },
            'spot': { label: '── Spot Trading ──', types: [] },
            'liquidation': { label: '── Liquidation ──', types: [] },
            'funding': { label: '── Funding ──', types: [] },
            'transfer': { label: '── Transfers ──', types: [] },
            'account': { label: '── Account ──', types: [] },
            'vault': { label: '── eStrategy ──', types: [] }
        };
        types.forEach(type => {
            if (categories[type.category]) {
                categories[type.category].types.push(type);
            }
        });
        let html = `<option value="all">${t('filter.allTypes')}</option>`;
        Object.keys(categories).forEach(cat => {
            if (categories[cat].types.length > 0) {
                html += `<optgroup label="${categories[cat].label}">`;
                categories[cat].types.forEach(type => {
                    html += `<option value="${type.type}">${type.icon} ${getTypeLabel(type.type)}</option>`;
                });
                html += `</optgroup>`;
            }
        });
        typeFilter.innerHTML = html;
    }
    
    // Populate status filter
    const statusFilter = document.getElementById('tx-status-filter');
    if (statusFilter) {
        const statuses = getAllTxStatuses();
        statusFilter.innerHTML = `<option value="all">${t('filter.allStatus')}</option>` +
            statuses.map(s => `<option value="${s.status}">${s.icon} ${getStatusLabel(s.status)}</option>`).join('');
    }
}

function updateTransactionsPageStats() {
    const totalEl = document.getElementById('tx-page-total');
    const tpsEl = document.getElementById('tx-page-tps');
    const pendingEl = document.getElementById('tx-page-pending');
    const sequencedEl = document.getElementById('tx-page-sequenced');
    
    if (totalEl) {
        totalEl.textContent = formatNumber(globalState.totalTransactions);
        totalEl.classList.add('flash-update');
        setTimeout(() => totalEl.classList.remove('flash-update'), 500);
    }
    if (tpsEl) {
        tpsEl.textContent = formatNumber(globalState.currentTPS);
    }
    if (pendingEl) {
        pendingEl.textContent = globalState.pendingTxCount;
    }
    if (sequencedEl) {
        sequencedEl.textContent = globalState.sequencedTxCount;
    }
}

function startTransactionsPageUpdates() {
    const statsInterval = setInterval(() => {
        if (currentPage === 'transactions') {
            updateTransactionsPageStats();
        }
    }, 2000);
    updateIntervals.push(statsInterval);
}

function loadAllTransactions(page = 1) {
    const typeFilter = document.getElementById('tx-type-filter')?.value || 'all';
    const statusFilter = document.getElementById('tx-status-filter')?.value || 'all';
    const pairFilter = document.getElementById('tx-pair-filter')?.value || 'all';
    
    const result = getTransactions(page, 20, { type: typeFilter, status: statusFilter, pair: pairFilter });
    const tbody = document.getElementById('all-transactions');
    
    tbody.innerHTML = result.data.map(tx => `
        <tr onclick="viewTransaction('${tx.hash}')">
            <td class="hash-cell">${truncateHash(tx.hash)}</td>
            <td><span class="type-cell ${tx.type}">${tx.typeIcon} ${getTypeLabel(tx.type)}</span></td>
            <td>${tx.pair}</td>
            <td class="side-cell ${tx.side}">${getSideLabel(tx.side)}</td>
            <td>${tx.priceFormatted}</td>
            <td>${tx.sizeFormatted}</td>
            <td>${tx.valueFormatted}</td>
            <td class="time-cell">${formatTimeI18n(tx.timestamp)}</td>
            <td class="address-cell">${truncateHash(tx.user, 6, 4)}</td>
            <td><span class="status-cell ${tx.status}" style="--status-color: ${tx.statusColor}">${tx.statusIcon} ${getStatusLabel(tx.status)}</span></td>
        </tr>
    `).join('');
    
    document.getElementById('tx-page').textContent = result.page;
    document.getElementById('tx-total-pages').textContent = result.totalPages;
    globalState.currentPage.tx = page;
}

function filterTransactions() {
    loadAllTransactions(1);
}

// Batches Page
function initBatchesPage() {
    populateBatchFilters();
    loadAllBatches();
    updateBatchesPageStats();
    startBatchesPageUpdates();
}

function populateBatchFilters() {
    const statusFilter = document.getElementById('batch-status-filter');
    if (statusFilter) {
        const statuses = getAllBatchStatuses();
        statusFilter.innerHTML = `<option value="all">${t('filter.allStatus')}</option>` +
            statuses.map(s => `<option value="${s.status}">${s.icon} ${getStatusLabel(s.status)}</option>`).join('');
    }
}

function updateBatchesPageStats() {
    const latestEl = document.getElementById('batch-page-latest');
    const pendingEl = document.getElementById('batch-page-pending');
    const provenEl = document.getElementById('batch-page-proven');
    const finalizedEl = document.getElementById('batch-page-finalized');
    
    if (latestEl) {
        latestEl.textContent = '#' + globalState.latestBatch;
        latestEl.classList.add('flash-update');
        setTimeout(() => latestEl.classList.remove('flash-update'), 500);
    }
    if (pendingEl) {
        const pendingCount = globalState.batches.filter(b => b.status === 'pending' || b.status === 'sequenced' || b.status === 'committed').length;
        pendingEl.textContent = pendingCount;
    }
    if (provenEl) {
        provenEl.textContent = globalState.provenBatchCount;
    }
    if (finalizedEl) {
        finalizedEl.textContent = globalState.finalizedBatchCount;
    }
}

function startBatchesPageUpdates() {
    const statsInterval = setInterval(() => {
        if (currentPage === 'batches') {
            updateBatchesPageStats();
        }
    }, 3000);
    updateIntervals.push(statsInterval);
}

function loadAllBatches(page = 1) {
    const statusFilter = document.getElementById('batch-status-filter')?.value || 'all';
    const result = getBatches(page, 20, { status: statusFilter });
    const tbody = document.getElementById('all-batches');
    
    tbody.innerHTML = result.data.map(batch => `
        <tr onclick="viewBatch(${batch.id})">
            <td class="hash-cell">#${batch.id}</td>
            <td class="time-cell">${batch.createdAtFormatted}</td>
            <td class="time-cell">${batch.sequencedAtFormatted}</td>
            <td class="time-cell">${batch.submittedAtFormatted}</td>
            <td>${batch.txCount.toLocaleString()}</td>
            <td class="hash-cell">${truncateHash(batch.l1TxHash)}</td>
            <td>#${batch.ethBlock.toLocaleString()}</td>
            <td><span class="status-cell ${batch.status}" style="--status-color: ${batch.statusColor}">${batch.statusIcon} ${getStatusLabel(batch.status)}</span></td>
        </tr>
    `).join('');
    
    document.getElementById('batch-page').textContent = result.page;
    document.getElementById('batch-total-pages').textContent = result.totalPages;
    globalState.currentPage.batch = page;
}

function filterBatches() {
    loadAllBatches(1);
}

// Blocks Page (for future Edge Chain)
function initBlocksPage() {
    loadAllBlocks();
}

function loadAllBlocks(page = 1) {
    const tbody = document.getElementById('all-blocks');
    const blocks = [];
    
    for (let i = 0; i < 20; i++) {
        blocks.push({
            number: 1000000 - (page - 1) * 20 - i,
            time: Date.now() - i * 12000,
            txns: Math.floor(Math.random() * 200) + 50,
            validator: generateAddress(),
            gasUsed: Math.floor(Math.random() * 15000000) + 5000000,
            hash: generateHash()
        });
    }
    
    tbody.innerHTML = blocks.map(block => `
        <tr onclick="viewBlock(${block.number})">
            <td class="hash-cell">#${block.number.toLocaleString()}</td>
            <td class="time-cell">${formatTimeI18n(block.time)}</td>
            <td>${block.txns}</td>
            <td class="address-cell">${truncateHash(block.validator, 6, 4)}</td>
            <td>${(block.gasUsed / 1000000).toFixed(2)}M</td>
            <td class="hash-cell">${truncateHash(block.hash)}</td>
        </tr>
    `).join('');
}

// Transaction Detail Page
function viewTransaction(hash) {
    navigateTo('tx-detail', hash);
}

function initTxDetailPage(hash) {
    const tx = getTransaction(hash);
    
    document.getElementById('tx-detail-hash-breadcrumb').textContent = truncateHash(hash);
    document.getElementById('tx-detail-hash').textContent = hash;
    
    // Status with description
    const statusDesc = getStatusDescription(tx.status);
    document.getElementById('tx-detail-status').innerHTML = `
        <span class="status-cell ${tx.status}" style="--status-color: ${tx.statusColor}">${tx.statusIcon} ${getStatusLabel(tx.status)}</span>
        ${statusDesc ? `<span class="status-desc">${statusDesc}</span>` : ''}
    `;
    
    document.getElementById('tx-detail-time').textContent = `${tx.dateTime} (${formatTimeI18n(tx.timestamp)})`;
    
    const batchLink = document.getElementById('tx-detail-batch');
    batchLink.textContent = '#' + tx.batchId;
    batchLink.dataset.batch = tx.batchId;
    batchLink.href = '#batch/' + tx.batchId;
    batchLink.onclick = function(e) { e.preventDefault(); viewBatch(this.dataset.batch); };
    
    document.getElementById('tx-detail-position').textContent = `${tx.positionInBatch} / ~1,000`;
    
    // Transaction Content
    document.getElementById('tx-detail-type').innerHTML = `<span class="type-cell ${tx.type}">${tx.typeIcon} ${getTypeLabel(tx.type)}</span>`;
    document.getElementById('tx-detail-pair').textContent = tx.pair + ' Perpetual';
    document.getElementById('tx-detail-side').innerHTML = `<span class="side-cell ${tx.side}">${getSideLabel(tx.side)} (${tx.side === 'long' ? 'Buy' : 'Sell'})</span>`;
    document.getElementById('tx-detail-order-type').textContent = tx.orderType;
    document.getElementById('tx-detail-price').textContent = '$' + tx.priceFormatted;
    document.getElementById('tx-detail-size').textContent = tx.sizeFormatted + ' ' + tx.pair.split('-')[0];
    document.getElementById('tx-detail-value').textContent = tx.valueFormatted;
    document.getElementById('tx-detail-fee').textContent = `${tx.feeFormatted} (${tx.feeRate === 'Maker' ? '0.012%' : '0.038%'} ${tx.feeRate})`;
    document.getElementById('tx-detail-role').innerHTML = `<span class="badge badge-${tx.feeRate === 'Maker' ? 'primary' : 'warning'}">${tx.feeRate}</span>`;
    
    // Leverage (for certain tx types)
    const leverageEl = document.getElementById('tx-detail-leverage');
    if (leverageEl) {
        leverageEl.textContent = tx.leverage + 'x';
    }
    
    // On-Chain Proof - with settlement layer info
    const settlementLayer = globalState.settlementLayer.current === 'ethereum' ? 'Ethereum Mainnet' : 'Edge Chain';
    document.getElementById('tx-detail-settlement-layer').textContent = settlementLayer;
    document.getElementById('tx-detail-proof-batch').innerHTML = `<a href="#batch/${tx.batchId}" class="link" onclick="event.preventDefault(); viewBatch(${tx.batchId})">#${tx.batchId}</a>`;
    document.getElementById('tx-detail-l1-tx').textContent = truncateHash(tx.l1TxHash);
    
    const etherscanLink = document.getElementById('tx-detail-etherscan');
    if (globalState.settlementLayer.current === 'ethereum') {
        etherscanLink.href = `https://etherscan.io/tx/${tx.l1TxHash}`;
        etherscanLink.textContent = t('txDetail.viewEtherscan');
    } else {
        etherscanLink.href = `#`;
        etherscanLink.textContent = t('txDetail.viewEdgeChain');
    }
    
    const proofStatus = tx.status === 'finalized' ? 'verified' : tx.status === 'proven' ? 'proven' : 'pending';
    document.getElementById('tx-detail-proof-status').innerHTML = `<span class="status-cell ${tx.status}">${tx.statusIcon} ${getStatusLabel(tx.status)} on ${settlementLayer}</span>`;
    
    document.getElementById('tx-detail-state-before').innerHTML = truncateHash(tx.stateRootBefore, 12, 10) + ` <button class="copy-btn small" onclick="copyText('${tx.stateRootBefore}')">📋</button>`;
    document.getElementById('tx-detail-state-after').innerHTML = truncateHash(tx.stateRootAfter, 12, 10) + ` <button class="copy-btn small" onclick="copyText('${tx.stateRootAfter}')">📋</button>`;
    document.getElementById('tx-detail-verify-time').textContent = tx.proofVerifiedAt ? formatDateTime(tx.proofVerifiedAt) : '-';
    
    // Verifier contract
    document.getElementById('tx-detail-verifier').textContent = truncateHash(globalState.settlementLayer.verifierContract, 10, 8);
    
    // Related Info
    document.getElementById('tx-detail-order-id').textContent = tx.orderId;
    document.getElementById('tx-detail-cloid').textContent = tx.cloid ? truncateHash(tx.cloid, 10, 8) : '-';
    
    const userLink = document.getElementById('tx-detail-user');
    userLink.textContent = tx.user;
    userLink.dataset.address = tx.user;
    userLink.href = '#address/' + tx.user;
    userLink.onclick = function(e) { e.preventDefault(); viewAddress(this.dataset.address); };
    
    const counterpartyLink = document.getElementById('tx-detail-counterparty');
    counterpartyLink.textContent = tx.counterparty;
    counterpartyLink.dataset.address = tx.counterparty;
    counterpartyLink.href = '#address/' + tx.counterparty;
    counterpartyLink.onclick = function(e) { e.preventDefault(); viewAddress(this.dataset.address); };
    
    // Input Data
    document.getElementById('tx-input-data').textContent = JSON.stringify({
        action: tx.type,
        pair: tx.pair,
        side: tx.side,
        price: tx.price,
        size: tx.size,
        orderType: tx.orderType,
        leverage: tx.leverage,
        cloid: tx.cloid,
        timestamp: tx.timestamp,
        sequenceNumber: tx.sequenceNumber,
        signature: generateHash()
    }, null, 2);
}

// Batch Detail Page
function viewBatch(id) {
    navigateTo('batch-detail', id);
}

function initBatchDetailPage(id) {
    const batch = getBatch(id);
    
    document.getElementById('batch-detail-id-breadcrumb').textContent = '#' + id;
    document.getElementById('batch-detail-id').textContent = '#' + batch.id;
    
    // Status with description
    document.getElementById('batch-detail-status').innerHTML = `
        <span class="status-cell ${batch.status}" style="--status-color: ${batch.statusColor}">${batch.statusIcon} ${getStatusLabel(batch.status)}</span>
        <span class="status-desc">${batch.statusDescription}</span>
    `;
    
    // Timeline
    document.getElementById('batch-detail-created').textContent = batch.createdAtFormatted;
    document.getElementById('batch-detail-sequenced').textContent = batch.sequencedAtFormatted;
    document.getElementById('batch-detail-submitted').textContent = batch.submittedAtFormatted;
    document.getElementById('batch-detail-proven').textContent = batch.provenAtFormatted;
    document.getElementById('batch-detail-finalized').textContent = batch.finalizedAtFormatted;
    document.getElementById('batch-detail-tx-count').textContent = batch.txCount.toLocaleString();
    
    // Settlement Info
    const settlementLayer = globalState.settlementLayer.current === 'ethereum' ? 'Ethereum Mainnet' : 'Edge Chain';
    document.getElementById('batch-detail-settlement-layer').textContent = `${batch.settlementLayerIcon} ${settlementLayer}`;
    document.getElementById('batch-detail-l1-tx').textContent = truncateHash(batch.l1TxHash);
    
    const etherscanLink = document.getElementById('batch-detail-etherscan');
    if (globalState.settlementLayer.current === 'ethereum') {
        etherscanLink.href = `https://etherscan.io/tx/${batch.l1TxHash}`;
    } else {
        etherscanLink.href = `#`;
    }
    
    document.getElementById('batch-detail-eth-block').textContent = '#' + batch.ethBlock.toLocaleString();
    document.getElementById('batch-detail-gas').textContent = `${batch.gasUsed} gas (${batch.gasCost})`;
    document.getElementById('batch-detail-proof-type').textContent = batch.proofType;
    document.getElementById('batch-detail-proof-size').textContent = batch.proofSize;
    document.getElementById('batch-detail-state-root').textContent = truncateHash(batch.stateRoot, 16, 12);
    document.getElementById('batch-detail-prev-state-root').textContent = truncateHash(batch.previousStateRoot, 16, 12);
    
    // Data Availability
    document.getElementById('batch-detail-da-mode').textContent = batch.dataAvailability;
    document.getElementById('batch-detail-blob-size').textContent = batch.blobSize;
    document.getElementById('batch-detail-compression').textContent = batch.compressionRatio;
    document.getElementById('batch-detail-verifier').textContent = truncateHash(batch.verifierContract, 10, 8);
    
    // Status Timeline visual
    renderStatusTimeline(batch);
    
    // Transactions in Batch
    document.getElementById('batch-tx-subtitle').textContent = `${t('batchDetail.showing')} ${batch.transactions.length} ${t('batchDetail.ofTxs')} #${batch.id}`;
    
    const tbody = document.getElementById('batch-transactions');
    tbody.innerHTML = batch.transactions.map(tx => `
        <tr onclick="viewTransaction('${tx.hash}')">
            <td class="hash-cell">${truncateHash(tx.hash)}</td>
            <td><span class="type-cell ${tx.type}">${tx.typeIcon} ${getTypeLabel(tx.type)}</span></td>
            <td>${tx.pair}</td>
            <td class="side-cell ${tx.side}">${getSideLabel(tx.side)}</td>
            <td>${tx.priceFormatted}</td>
            <td>${tx.sizeFormatted}</td>
            <td class="address-cell">${truncateHash(tx.user, 6, 4)}</td>
            <td><span class="status-cell ${tx.status}" style="--status-color: ${tx.statusColor}">${tx.statusIcon} ${getStatusLabel(tx.status)}</span></td>
        </tr>
    `).join('');
}

// Render status timeline for batch
function renderStatusTimeline(batch) {
    const timeline = document.getElementById('batch-status-timeline');
    if (!timeline) return;
    
    const statuses = ['pending', 'sequenced', 'committed', 'proven', 'finalized'];
    const currentIndex = statuses.indexOf(batch.status);
    
    timeline.innerHTML = statuses.map((status, index) => {
        const statusInfo = BATCH_STATUS.find(s => s.status === status);
        const isCompleted = index <= currentIndex;
        const isCurrent = index === currentIndex;
        
        return `
            <div class="timeline-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}">
                <div class="timeline-icon" style="background: ${isCompleted ? statusInfo.color : '#333'}">${statusInfo.icon}</div>
                <div class="timeline-content">
                    <div class="timeline-title">${getStatusLabel(status)}</div>
                    <div class="timeline-desc">${statusInfo.description}</div>
                </div>
            </div>
        `;
    }).join('');
}

// Address Page
function viewAddress(address) {
    navigateTo('address', address);
}

function initAddressPage(address) {
    const addrData = getAddress(address);
    
    document.getElementById('address-hash').textContent = address;
    document.getElementById('address-tx-count').textContent = addrData.txCount.toLocaleString();
    document.getElementById('address-volume').textContent = formatUSD(addrData.volume);
    document.getElementById('address-first-tx').textContent = formatDateTime(addrData.firstTx).split(' ')[0];
    document.getElementById('address-last-tx').textContent = formatTimeI18n(addrData.lastTx);
    
    // Total Value
    document.getElementById('address-total-value').textContent = formatUSD(addrData.totalValue);
    
    // Account Values
    document.getElementById('address-perps-value').textContent = formatUSD(addrData.perpsValue);
    document.getElementById('address-spot-value').textContent = formatUSD(addrData.spotValue);
    document.getElementById('address-prediction-value').textContent = formatUSD(addrData.predictionValue);
    document.getElementById('address-vault-value').textContent = formatUSD(addrData.vaultValue);
    
    // Update breakdown bar percentages
    const total = addrData.totalValue || 1;
    document.getElementById('bar-perps').style.width = (addrData.perpsValue / total * 100) + '%';
    document.getElementById('bar-spot').style.width = (addrData.spotValue / total * 100) + '%';
    document.getElementById('bar-prediction').style.width = (addrData.predictionValue / total * 100) + '%';
    document.getElementById('bar-vault').style.width = (addrData.vaultValue / total * 100) + '%';
    
    // Perps Positions
    const perpsContainer = document.getElementById('address-perps-positions');
    if (addrData.perpsPositions && addrData.perpsPositions.length > 0) {
        perpsContainer.innerHTML = addrData.perpsPositions.map(p => `
            <div class="perps-position-item">
                <span class="perps-position-pair">${p.pair}-USDT</span>
                <span class="perps-position-side ${p.side}">${p.side.toUpperCase()}</span>
                <span class="perps-position-value">${formatUSD(p.value)}</span>
            </div>
        `).join('');
    } else {
        perpsContainer.innerHTML = '<div class="account-empty">No positions</div>';
    }
    
    // Spot Holdings
    const spotContainer = document.getElementById('address-spot-holdings');
    if (addrData.spotHoldings && addrData.spotHoldings.length > 0) {
        spotContainer.innerHTML = addrData.spotHoldings.map(h => `
            <div class="spot-holding-item">
                <div class="spot-holding-coin">
                    <span class="spot-holding-symbol">${h.symbol}</span>
                    <span class="spot-holding-amount">${h.symbol === 'USDC' || h.symbol === 'USDT' ? formatNumber(h.amount) : h.amount.toFixed(4)}</span>
                </div>
                <div class="spot-holding-info">
                    <div class="spot-holding-value">${formatUSD(h.value)}</div>
                    <div class="spot-holding-percent">${h.percent}%</div>
                </div>
            </div>
        `).join('');
    } else {
        spotContainer.innerHTML = '<div class="account-empty">No holdings</div>';
    }
    
    // Prediction Positions
    const predictionContainer = document.getElementById('address-prediction-positions');
    if (addrData.predictionPositions && addrData.predictionPositions.length > 0) {
        predictionContainer.innerHTML = addrData.predictionPositions.map(p => `
            <div class="perps-position-item">
                <span class="perps-position-pair">${p.market}</span>
                <span class="perps-position-value">${formatUSD(p.value)}</span>
            </div>
        `).join('');
    } else {
        predictionContainer.innerHTML = '<div class="account-empty">No positions</div>';
    }
    
    // Vault Deposits
    const vaultContainer = document.getElementById('address-vault-deposits');
    if (addrData.vaultDeposits && addrData.vaultDeposits.length > 0) {
        vaultContainer.innerHTML = addrData.vaultDeposits.map(d => `
            <div class="vault-deposit-item">
                <span class="vault-deposit-name">${d.name}</span>
                <span class="vault-deposit-value">${formatUSD(d.value)}</span>
            </div>
        `).join('');
    } else {
        vaultContainer.innerHTML = '<div class="account-empty">No deposits</div>';
    }
    
    loadAddressTransactions(address);
}

function loadAddressTransactions(address, page = 1) {
    const addrData = getAddress(address);
    let txs = addrData.transactions;
    
    if (addressFilter !== 'all') {
        const filterMap = {
            'trading': [
                'perpTrade', 'perpOrder', 'perpCancel', 'perpCancelByCloid', 'perpCancelAll', 
                'perpModify', 'perpBatchModify', 'perpTwap', 'perpTwapCancel', 'scheduleCancel',
                'spotTrade', 'spotOrder', 'spotCancel', 'spotCancelByCloid', 'spotCancelAll',
                'spotModify', 'spotBatchModify'
            ],
            'transfer': [
                'deposit', 'withdraw', 'perpToSpot', 'spotToPerp', 
                'perpToPred', 'predToPerp', 'spotToPred', 'predToSpot',
                'spotTransfer', 'internalTransfer'
            ],
            'liquidation': ['liquidation', 'adl', 'funding'],
            'vault': ['vaultDeposit', 'vaultWithdraw', 'vaultClaim'],
            'account': ['updateLeverage', 'updateMargin', 'setIsolated', 'setCross', 'approveAgent']
        };
        const types = filterMap[addressFilter] || [];
        txs = txs.filter(tx => types.includes(tx.type));
    }
    
    const start = (page - 1) * 20;
    const pageTxs = txs.slice(start, start + 20);
    
    const tbody = document.getElementById('address-transactions');
    tbody.innerHTML = pageTxs.map(tx => `
        <tr onclick="viewTransaction('${tx.hash}')">
            <td class="hash-cell">${truncateHash(tx.hash)}</td>
            <td><span class="type-cell ${tx.type}">${tx.typeIcon} ${getTypeLabel(tx.type)}</span></td>
            <td>${tx.pair}</td>
            <td class="side-cell ${tx.side}">${getSideLabel(tx.side)}</td>
            <td>${tx.priceFormatted}</td>
            <td>${tx.sizeFormatted}</td>
            <td>${tx.valueFormatted}</td>
            <td>${tx.feeFormatted}</td>
            <td class="time-cell">${formatTimeI18n(tx.timestamp)}</td>
            <td><span class="status-cell ${tx.status}" style="--status-color: ${tx.statusColor}">${tx.statusIcon} ${getStatusLabel(tx.status)}</span></td>
        </tr>
    `).join('');
    
    const totalPages = Math.ceil(txs.length / 20) || 1;
    document.getElementById('address-page').textContent = page;
    document.getElementById('address-total-pages').textContent = totalPages;
    globalState.currentPage.address = page;
}

function setAddressFilter(filter, btn) {
    addressFilter = filter;
    document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
    if (btn) {
        btn.classList.add('active');
    } else if (event && event.target) {
        event.target.classList.add('active');
    }
    const address = document.getElementById('address-hash').textContent;
    loadAddressTransactions(address);
}

// Pagination
function changePage(type, delta) {
    const currentPageNum = globalState.currentPage[type] || 1;
    const newPage = Math.max(1, currentPageNum + delta);
    
    switch (type) {
        case 'tx':
            loadAllTransactions(newPage);
            break;
        case 'batch':
            loadAllBatches(newPage);
            break;
        case 'address':
            const address = document.getElementById('address-hash').textContent;
            loadAddressTransactions(address, newPage);
            break;
        case 'block':
            loadAllBlocks(newPage);
            break;
    }
}

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    copyText(text);
}

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(t('toast.copied'), 'success');
    }).catch(() => {
        showToast(t('toast.copyFailed'), 'error');
    });
}

function shareTx() {
    const hash = document.getElementById('tx-detail-hash').textContent;
    const url = window.location.origin + window.location.pathname + '?tx=' + hash;
    copyText(url);
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function exportData(type) {
    showToast(t('toast.exporting'), 'success');
    setTimeout(() => {
        showToast(t('toast.exportComplete'), 'success');
    }, 1500);
}

function verifyProof() {
    const settlementLayer = globalState.settlementLayer.current === 'ethereum' ? 'Ethereum Mainnet' : 'Edge Chain';
    showModal(t('modal.verifyTitle'), `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 3rem; margin-bottom: 20px;">✓</div>
            <h3 style="color: var(--success); margin-bottom: 16px;">${t('modal.verifySuccess')}</h3>
            <p style="color: var(--text-secondary); margin-bottom: 20px;">
                ${t('modal.verifyDesc')}
            </p>
            <div style="background: var(--bg-dark); border-radius: 8px; padding: 16px; text-align: left;">
                <div style="margin-bottom: 12px;">
                    <strong>${t('modal.verifyMethod')}:</strong> STARK (StarkEx)
                </div>
                <div style="margin-bottom: 12px;">
                    <strong>${t('txDetail.settlementLayer')}:</strong> ${settlementLayer}
                </div>
                <div style="margin-bottom: 12px;">
                    <strong>${t('modal.verifierContract')}:</strong> 
                    <span style="font-family: var(--font-mono); color: var(--primary); font-size: 0.85rem;">${globalState.settlementLayer.verifierContract}</span>
                </div>
                <div>
                    <strong>${t('modal.verifyBlock')}:</strong> #19,456,789
                </div>
            </div>
            <div style="margin-top: 16px; padding: 12px; background: rgba(59, 130, 246, 0.1); border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.3);">
                <span style="color: var(--primary);">ℹ️</span>
                <span style="color: var(--text-secondary); font-size: 0.9rem;">${t('settlement.upgrade')}</span>
            </div>
        </div>
    `);
}

function showTechnicalDetails() {
    showModal(t('modal.techTitle'), `
        <div style="padding: 10px;">
            <h4 style="margin-bottom: 16px;">StarkEx Settlement Details</h4>
            
            <div style="background: var(--bg-dark); border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                <div style="margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
                    <strong>${t('modal.dataAvailability')}:</strong> ZK-Rollup
                </div>
                <div style="margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
                    <strong>${t('modal.proofSystem')}:</strong> STARK (Scalable Transparent ARgument of Knowledge)
                </div>
                <div style="margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
                    <strong>${t('modal.securityLevel')}:</strong> 128-bit computational security
                </div>
                <div style="margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
                    <strong>${t('modal.prover')}:</strong> StarkWare SHARP (SHARed Prover)
                </div>
                <div>
                    <strong>${t('txDetail.settlementLayer')}:</strong> ${globalState.settlementLayer.current === 'ethereum' ? 'Ethereum' : 'Edge Chain'}
                </div>
            </div>
            
            <h4 style="margin-bottom: 16px;">${t('modal.merkleTree')}</h4>
            <div style="background: var(--bg-dark); border-radius: 8px; padding: 16px; font-family: var(--font-mono); font-size: 0.85rem;">
                <div style="margin-bottom: 8px;">${t('modal.treeHeight')}: 64</div>
                <div style="margin-bottom: 8px;">${t('modal.leafType')}: Vault State</div>
                <div>${t('modal.hashFunction')}: Pedersen Hash</div>
            </div>
            
            <h4 style="margin: 16px 0;">Settlement Layer Upgrade</h4>
            <div style="background: rgba(59, 130, 246, 0.1); border-radius: 8px; padding: 16px; border: 1px solid rgba(59, 130, 246, 0.3);">
                <p style="color: var(--text-secondary); margin: 0;">
                    edgeX is currently settling on <strong>Ethereum Mainnet</strong>. 
                    In the future, settlement will migrate to <strong>Edge Chain</strong> for improved performance and lower costs while maintaining the same security guarantees.
                </p>
            </div>
        </div>
    `);
}

function showModal(title, content) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('modal').classList.add('show');
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

// Scroll to section (for Requirements page)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        closeModal();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        hideSearchDropdown();
    }
    if (e.key === '/' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        document.getElementById('search-input').focus();
        showSearchDropdown();
    }
});
