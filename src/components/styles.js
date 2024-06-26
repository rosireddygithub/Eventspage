import styled from "styled-components";

export const Container = styled.div`
  --timeline: 50%;
  --box-shadow: -0.3em -0.3em 0.5em #007bff, /* Blue shadow */
                0.3em 0.3em 0.5em #007bff; /* Blue shadow */
  --background: #e0e5ec;
  display: flex;
  position: relative;
  overflow-y: auto; /* Make the container scrollable */
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0;
  padding-top: 0;
  background: var(--background);
  width: 100%;
  height: 100vh;

  & > * {
    font-size: clamp(0.5rem, 0.3rem + 0.6vw, 1.5rem);
  }

  &:before {
    position: absolute;
    content: '';
    width: 0.5em;
    height: 100vh;
    background: #f8f2f2;
    box-shadow: inset -0.3em -0.3em 0.5em #fff,
                inset 0.3em 0.3em 0.5em #a3b1c6;
    left: var(--timeline);
    transform: translateX(-50%);
  }

  @media(max-width: 320px) {
    --timeline: 10%;
  }
`;

export const CardContainer = styled.div`
  z-index: 1;
  --left: 60%;
  --right: -59%;
  --text-align: ${({isOnLeft}) => isOnLeft ? "left" : "right"};
  top: 0;
  position: absolute;
  display: flex;
  opacity: ${({verPos}) => verPos >= 51 ? 0 : verPos < 0 ? 0 : 1};
  flex-direction: column;
  text-align: var(--text-align);
  background: var(--background);
  border-radius: 0.5em;
  box-shadow: var(--box-shadow);
  width: 30em;
  min-height: 6em;
  padding: 0.5em;
  overflow: hidden;
  transform: ${({verPos, isOnLeft}) => `translate(${isOnLeft ? "var(--left)" : "var(--right)"}, ${verPos}em)`};
  transition: opacity 2s ease-in-out, transform 1.4s ease-in-out;
  
  @media(max-width: 320px) {
    --left: 2em;
    --right: 2em;
    left: var(--timeline);
    --text-align: "left";
  }

  &>* {
    margin: 0.2em;
  }
`;

export const Time = styled.div`
  font-weight: 700;
  color: #010831;

  & span {
    background: rgba(255, 255, 255, 0.4);
    padding: 0.3em 0.5em;
    border-radius: 0.5em;
    box-shadow: inset -0.15em -0.15em 0.3em #fff,
                inset 0.2em 0.2em 0.3em #a3b1c6;
  }
`;

export const Title = styled.h3`
  color: brown;
`;

export const Description = styled.p`
  color: black;
`;

export const ViewMoreButton = styled.button`
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.5em;
  background: #007bff;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;
export const Mark = styled.div`
  left: var(--timeline);
  opacity: ${({verPos}) => verPos >= 49 ? 0 : verPos < 0 ? 0 : 1};
  position: absolute;
  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
  border: 1.5px solid white;
  box-shadow: 0.3em 0.3em 0.5em #3572EF inset,
              -0.3em -0.3em 0.3em red inset,
              -0.3em -0.3em 0.5em #fff,
              0.3em 0.3em 0.5em #a3b1c6;
  transform: ${({verPos}) => `translate(-50%, ${verPos}em)`};
  transition: opacity 2.5s ease-in-out, transform 1.4s ease-in-out;
`;


export const DetailedCardContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  ${({ direction }) => direction === 'prev' ? 'left: 10px;' : 'right: 10px;'}

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Dot = styled.span`
  width: 10px; 
  height: 10px;
  margin: 0 5px;
  background-color: ${({ isActive }) => (isActive ? 'black' : 'grey')};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-bottom: 2px solid #ccc;
`;

export const EventCategory = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const YearSelect = styled.select`
  padding: 8px 16px;
  font-size: 16px;
  border: 2px solid #007bff;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    border-color: #0056b3;
  }
`;