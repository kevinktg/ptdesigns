import ptType from '../../assets/pt-type.svg'

const Logo = () => {
    return (
        <div className='fixed top-8 left-8 z-50 transition-transform duration-700 hover:scale-105 group'>
            {/* Golden Aura Glow (Subtle emissive detachment) */}
            <div className="absolute inset-0 bg-gold/10 blur-[60px] rounded-full scale-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
            
            <div className="w-40 relative">
                <img 
                    src={ptType} 
                    alt="Parm Tjhung Designs" 
                    className="w-full filter drop-shadow-[0_0_2px_#BFA77A] drop-shadow-[0_0_15px_rgba(191,167,122,0.6)] brightness-125" 
                />
            </div>
        </div>
    )
}

export default Logo