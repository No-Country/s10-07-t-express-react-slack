import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <section className=''>
            <Link to='/register' className='px-4 py-2 rounded-lg bg-black text-white'>Registrarse</Link>
        </section>
    )
}
export default Landing;
