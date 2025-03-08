import React, { useState, useEffect } from 'react'

interface ImageProps {
  src: string
  alt?: string
  className?: string
  skeleton?: React.ReactNode
  defaultSrc?: string
}

const Image = (props: ImageProps) => {
  const {
    src,
    alt = '',
    className = '',
    skeleton = <div className="skeleton" style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0' }} />,
    defaultSrc = 'https://via.placeholder.com/150', // 默认图片
  } = props

  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleImageLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imgElement = event.currentTarget
    imgElement.src = defaultSrc
    setIsLoading(false)
    setHasError(true)
  }

  useEffect(() => {
    setIsLoading(true)
    setHasError(false)
  }, [src])

  return (
    <div className={`image-container ${className}`}>
      {isLoading && skeleton}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`image ${className}`}
        style={{
          display: isLoading ? 'none' : 'block',
        }}
      />

      {hasError && (
        <div className='image-error'>
          <span>图片加载失败</span>
        </div>
      )}
    </div>
  )
}

export default Image