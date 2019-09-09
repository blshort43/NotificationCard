import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, TranslateText, Card } from 'components';

const StyledCard = styled(Card)`
  cursor: pointer;
  display: flex;
  height: 90px;
  :hover {
    box-shadow: 2px 5px 4px #888888;
    transform: translate(0px, -4px);
  }
  box-shadow: ${props => (props.focus ? '2px 5px 4px #888888' : 'none')};
  transform: ${props => (props.focus ? 'translate(0px, -4px)' : 'none')};
  transition: ease 0.2s;
`;

const TextContainer = styled(Box)`
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: right;
  padding-top: 5px;
  margin: auto;
`;

const TitleText = styled(TranslateText)`
  margin-bottom: 2px;
`;

const TotalText = styled(TranslateText)`
  font-size: 1.5rem;
`;

const NotificationCard = ({
  children,
  icon,
  total,
  translate,
  title,
  to,
  focus,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <Box onFocus={handleFocus} onBlur={handleBlur} width={[1 / 4]} p={1}>
      <Link to={`app/${to}`} style={{ textDecoration: 'none' }}>
        <StyledCard {...rest} focus={focused} p={3}>
          <Box m="auto">
            {icon &&
              React.cloneElement(icon, {
                size: icon.props.size || 50,
                color: 'white',
              })}
          </Box>
          <TextContainer width={[3 / 4]} p={1}>
            {children}
            <TitleText translate={title} />
            <TotalText>{total || 0}</TotalText>
          </TextContainer>
        </StyledCard>
      </Link>
    </Box>
  );
};

NotificationCard.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.object,
  total: PropTypes.number,
  translate: PropTypes.object,
  title: PropTypes.object,
  to: PropTypes.string,
  focus: PropTypes.bool,
};

export default NotificationCard;
