export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig(event)
  const body = readBody(event)

  try{
    // Add your logic here
    
    return new Response(JSON.stringify({
      message: `Successful Request`,
    }), { status: 200 })

  }catch( error){
    throw createError({
      statusCode: 400,
      statusMessage: `Bad Request Error : ${ error}`
    })
  }
})
