import './Contact.css';

const Contact = () => {
    return (
<div class="feedback-card">
  <div class="feedback-header" id='contact'>
    Contact Me!
  </div>
  <form class="feedback-body">
    <input type="email" class="feedback-body__email" placeholder="Email" /><textarea type="text" class="feedback-body__message" placeholder="Message"></textarea><button class="feedback-body__submit">SEND</button>
  </form>
</div>
    );
};

export default Contact;