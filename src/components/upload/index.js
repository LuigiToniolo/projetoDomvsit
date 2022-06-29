import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

  const Upload = () => {

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  })

  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop})
  console.log(isDragActive)

  const files = acceptedFiles.map(file => (
    
    <p className='arquivo-enviado' key={file.path}>
      {file.path}
    </p>
  ))
  return (
    <div className='dropzone'{...getRootProps()}>
       <input {...getInputProps()} />
      {isDragActive || files.length ?

              <p>{files}</p>:
          <>
            <div className='conteudo-drag'>
            <h3 className='titulo-drag'>Currículo</h3>
        <p className='descricao-drag'>Clique aqui ou arraste o documento para enviar.</p>
            </div> 

            <div>
              <p className='arquivo'>{files}</p>
            </div>
          </>
      }



    </div>
    
  )
}

export default Upload;