import Link from 'next/link';
import { ImWhatsapp } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';

export function Footer() {
  return (
    <div className="footer bg-red-100">
      <div className="footer-relative">
        <div className="footer-prepoints">
          <div className="footer-points">
            <div className="footer-dk bg-dk-50">
              <div className="footer-content" id="rodape">
                <h3>You with me?</h3>
                <Link href="mailto:gutemberg.n.cruz@gmail.com" target="_blank" rel="noopener noreferrer">
                  <p><span><SiGmail className='text-red-100' /></span> gutemberg.n.cruz@gmail.com</p>
                </Link>
                {/* <Link href="https://api.whatsapp.com/send?phone=5592993964791&text=Opa,%20b%C3%A3o?" target="_blank" rel="noopener noreferrer">
                  <p> <span><ImWhatsapp className='text-red-100' /></span> +55 92 99396-4791</p>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}