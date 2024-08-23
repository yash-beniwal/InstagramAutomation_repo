class MessagePage {
    constructor(page) {
        this.page = page;
        this.messageButton = page.locator('text="Message"');
        this.messageInput = page.locator('textarea');
        this.sendButton = page.locator('text="Send"');
    }

    async sendMessage(message) {
        await this.messageButton.click();
        await this.messageInput.fill(message);
        await this.sendButton.click();
    }
}

module.exports = MessagePage;
