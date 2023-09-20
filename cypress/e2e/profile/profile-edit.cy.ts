let profileId = '';

describe('Пользователь заходит на страницу пользователя', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('И редактирует его', () => {
        const newName = 'new';
        const lastName = 'lastname';
        cy.updateProfile(newName, lastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', lastName);
    });
});
