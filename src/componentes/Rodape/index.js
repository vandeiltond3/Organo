import './Rodape.css'

const Rodape = () => {
    return (
        <div className='footer'>
            <div className='rdss'>
                <img className='rds' src="/imagens/fb.png" alt='logo do facebook'/>
                <img className='rds' src="/imagens/tw.png" alt='logo do twiter'/>
                <img className='rds' src="/imagens/ig.png" alt='logo do instagram'/>
            </div>
            <img className='logo' src="/imagens/logo.png" alt='rodape do site'/>
            <p>Desenvolvido por Vandeilton Lima.</p>
        </div>
    )
}

export default Rodape