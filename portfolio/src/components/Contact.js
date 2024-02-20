import ContactForm from './ContactForm';
import { socialMediaLinks } from '../constants/constants';

const Contact = () => {
  return (
    <div className='bg-gray-100 flex flex-col md:flex-row items-center justify-center py-5 md:py-2 mt-5'>
      <div className='w-full md:w-1/2 lg:w-1/3 mx-auto md:order-2 text-black'>
        <div className='bg-white p-6 md:p-8 rounded-md shadow-md text-black mx-2'>
          <h1 className='text-3xl font-bold mb-6 text-center text-black'>
            Reach Out for Expertise!
          </h1>
          <span className='flex items-center justify-center space-x-4'>
            {socialMediaLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                rel='noreferrer'
                target='_blank'
                className={`transition ${link.color}`}
              >
                <link.icon className='w-6 h-6' />
              </a>
            ))}
          </span>

          <ContactForm />
        </div>
      </div>
      <div className='w-full md:w-1/2 lg:w-1/3 mx-auto md:order-1 mt-10 md:mt-0'>
        <div className='flex flex-col items-center'>
          <img
            src='https://res.cloudinary.com/dxowfa3zj/image/upload/v1708457047/tskl10qzp3ausrzugq9v.png'
            alt='Ashutosh Kumar'
            className='rounded-full h-48 w-48 md:h-96 md:w-96 mb-4 object-cover shadow-2xl'
          />
          <h1 className='text-3xl md:text-4xl text-gray-400 font-bold mb-3'>
            Ashutosh Kumar
          </h1>
          <p className='text-gray-600 font-light text-lg md:text-2xl text-center md:text-left'>
            Baked with ❤️ by Ashutosh Kumar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
