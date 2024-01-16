import emailjs from '@emailjs/browser';

const sendEmail = (data) => {
    const TemplateParam = {
      message :`Причина: ${data.reason}`,
      days : `Количество дней: ${data.days}`,
      date:` Дата: ${data.date.format('DD/MM/YY')}`,
      value:`${data.mail}`
    }
  emailjs.send('service_sfjqnft', 'template_wqid46m', TemplateParam, 'iL1ykgQcxewUhSspn')
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
  })
  .catch((err) => {
    console.log('FAILED...', err);
  });
};
export default sendEmail;