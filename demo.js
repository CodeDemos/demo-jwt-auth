const payload = 'eyJ1c2VybmFtZSI6ImJvYnVzZXIiLCJmaXJzdE5hbWUiOiJCb2IiLCJsYXN0TmFtZSI6IlVzZXIiLCJpYXQiOjE1MzE4NDA5NjUsImV4cCI6MTUzMjQ0NTc2NSwic3ViIjoiYm9idXNlciJ9';

console.log(Buffer.from(payload, 'base64').toString());
