import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Javascript news TESTING',
    subtitle: 'Что нового в JS за 2022 год?',
    img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmuJo_RKRiTBXB5U-' +
        'JzkCEHb7E5V4WW6JcsBYMnTd8uqAPW6lvlYbEXzg03uyQP8e-yQ&usqp=CAU',
    views: 1022,
    createdAt: '26.04.2022',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'asdf' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asdf' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
