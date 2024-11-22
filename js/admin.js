// 获取文章列表
function loadArticles() {
    return window.getArticlesFromStorage() || [];
}

// 保存文章
function saveArticle(article) {
    const articles = loadArticles();
    const newId = articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1;
    
    const newArticle = {
        id: newId,
        title: article.title,
        authors: article.authors,
        date: article.date,
        categories: article.categories,
        abstract: article.abstract,
        pdfUrl: `${GITHUB_REPO_URL}/papers/${article.fileName}`,
        fileName: article.fileName
    };
    
    articles.push(newArticle);
    localStorage.setItem('articles', JSON.stringify(articles));
    return newArticle;
}

// 删除文章
function deleteArticle(id) {
    const articles = loadArticles().filter(article => article.id !== id);
    localStorage.setItem('articles', JSON.stringify(articles));
}

// 更新文章
function updateArticle(updatedArticle) {
    const articles = loadArticles().map(article => 
        article.id === updatedArticle.id ? updatedArticle : article
    );
    localStorage.setItem('articles', JSON.stringify(articles));
}

// 导出函数
window.adminFunctions = {
    loadArticles,
    saveArticle,
    deleteArticle,
    updateArticle
};

// 添加全局函数供表单使用
window.handleArticleSubmit = async function(formData) {
    const newArticle = {
        title: formData.get('title'),
        authors: formData.get('authors'),
        date: formData.get('date'),
        categories: Array.from(window.selectedCategories || []),
        abstract: formData.get('abstract'),
        fileName: formData.get('pdf-file').name
    };

    try {
        const savedArticle = saveArticle(newArticle);
        alert('Article added successfully!');
        return savedArticle;
    } catch (error) {
        console.error('Error saving article:', error);
        alert('Error saving article. Please try again.');
        throw error;
    }
}; 