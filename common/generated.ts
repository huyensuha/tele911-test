class Generated {
    static emailPrefix = 'dung.nguyen+'
    static emailSuffix = '@vseelab.com'

    static generateEmailWithPrefix() {
        const email: string = `${this.emailPrefix}${Date.now()}+${this.emailSuffix}`;
        return email.toLowerCase();
    }

    static getRandomString(totalWords: number): string {
        return faker.lorem.words(totalWords);
    }

}

export default Generated