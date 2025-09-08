import ContactForm from "../components/contact-form";

function Contact() {
  return (
   <div id="contact" className="p-6 lg:p-12 mt-30 min-h-[100vh]">
    <div className="section-h-wrapper">
      <h2 >📪 Contact Me</h2>
      <p>Feel free to contact me on "m.yousry8806@gmail" , or simply use the contact form</p>
    </div>
    
     <div className="grid lg:grid-cols-12 gap-6 mt-20 ">
      <div className="shadow-myShadow2 lg:col-span-5 rounded-md">
      <ContactForm />
      </div>
      <div className="lg:col-span-7 max-h-100 flex justify-center">
        <img src="/contactme.png" alt="" className="h-full w-full max-w-180 " />
      </div>
    </div>
   </div>
  );
}

export default Contact;
