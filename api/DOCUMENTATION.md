## Main:

```bash
GET - '/api/hello'

response {
  message: 'Wesnera API'
}
```

## Contact:

```
POST - '/api/contact'

request {
    email: 'kucherenko.web@gmail.com', // required
    name: 'Serhii Kucherenko', // required
    company: 'Apple.com', // required
    message: 'Please help me with', // required
}

response {
    message: 'Email has being sent',
    data: {
      mailData: {
        from: 'Wesnera.com <buhanka1994@gmail.com>',
        to: 'kucherenko.web@gmail.com',
        subject: 'Contact Us: Serhii Kucherenko from WM',
        text: 'Please work',
        html: '<div><p>Company: WM</p><p>Message: Please work</p></div>',
      },
      info: {} as any,
  }
}
```
