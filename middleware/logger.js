import colors from 'colors'

const logger=(req,res,next)=>{
  const methodColors={
    GET:'green',
    POST:'blue',
    PUT:'yellow',
    DELETE:'red'
  }
  const colorMethods = methodColors[req.method] || white
    console.log(colors[colorMethods](`${req.method} ${req.protocol}://${req.get('host')} ${req.originalUrl}`))
    next()
  }
  export default logger