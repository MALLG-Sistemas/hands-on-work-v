import PropTypes from "prop-types";
import styled from "styled-components";

const BannerSection = styled.section`
  width: 95%;
  height: 30vh;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0 0 3rem 3rem;
`;

const Banner = ({ image, alt }) => {
  return (
    <BannerSection
      $image={image}
      alt={alt}
    />
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Banner;
