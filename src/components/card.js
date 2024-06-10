import { useState, useEffect, useContext } from 'react';
import { CardContainer, Time, Title, Description, ViewMoreButton, DetailedCardContainer, CloseButton, ImageContainer, Image, NavigationButton, DotsContainer, Dot } from './styles';
import { IntervalContext } from './index';

export default function Card({ event, isOnLeft, ...restProps }) {
  const [verPos, setVerPos] = useState(-17);
  const { tick, setIsPaused } = useContext(IntervalContext);
  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setVerPos(prev => prev + 10);
  }, [tick]);

  const handleViewMore = () => {
    setIsPaused(true);
    setIsDetailViewOpen(true);
  };

  const handleClose = () => {
    setIsDetailViewOpen(false);
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (!isDetailViewOpen) {
      setIsPaused(false);
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? event.images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === event.images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <CardContainer
        verPos={verPos}
        isOnLeft={isOnLeft}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Time><span>{event.time}</span></Time>
        <Title>{event.title}</Title>
        <Description>{event.description}</Description>
        <ViewMoreButton onClick={handleViewMore}>View More</ViewMoreButton>
      </CardContainer>
      {isDetailViewOpen && (
        <DetailedCardContainer>
          <CloseButton onClick={handleClose}>Close</CloseButton>
          <Time><span>{event.time}</span></Time>
          <Title>{event.title}</Title>
          {event.images && event.images.length > 0 && (
            <>
              <ImageContainer>
                <NavigationButton direction="prev" onClick={handlePrevImage}>◀</NavigationButton>
                <Image src={event.images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
                <NavigationButton direction="next" onClick={handleNextImage}>▶</NavigationButton>
              </ImageContainer>
              <DotsContainer>
                {event.images.map((_, index) => (
                  <Dot key={index} isActive={index === currentImageIndex} />
                ))}
              </DotsContainer>
            </>
          )}
          <Description>{event.description}</Description>
        </DetailedCardContainer>
      )}
    </>
  );
}
