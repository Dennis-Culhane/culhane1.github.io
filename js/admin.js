// 获取文章列表
function loadArticles() {
    return window.getArticlesFromStorage() || [];
}

// 保存文章
function saveArticle(article) {
    const articles = loadArticles();
    const newId = articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1;
    
    const newArticle = {
        ...article,
        id: newId,
        pdfUrl: `${GITHUB_REPO_URL}/papers/${article.pdfFile.name}`
    };
    
    articles.push(newArticle);
    window.saveArticlesToStorage(articles);
    return newArticle;
}

// 删除文章
function deleteArticle(id) {
    const articles = loadArticles().filter(article => article.id !== id);
    window.saveArticlesToStorage(articles);
}

// 更新文章
function updateArticle(updatedArticle) {
    const articles = loadArticles().map(article => 
        article.id === updatedArticle.id ? updatedArticle : article
    );
    window.saveArticlesToStorage(articles);
}

// 导出函数
window.adminFunctions = {
    loadArticles,
    saveArticle,
    deleteArticle,
    updateArticle
}; 