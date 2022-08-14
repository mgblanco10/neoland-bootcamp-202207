function Info(props) {
    const logger = new Loggito('Settings')

    logger.info('constructor')

    logger.info('render')
    
        return <div className= "info-panel form container">
        <div className= "update-infoApp">
            <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ne6f06tRXhNZQl2jp5YjNepB8j5_hojl4LcOcyO-1s7TLzUHGuSIwblFSZ_ihI0BAlU&usqp=CAU"/>
        
            <p>Writing notes has never been so easy and fun</p>
        </div>
        <IconButton text="home" onClick={props.onCloseClick} />
    </div>

}
