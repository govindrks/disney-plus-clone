import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp> GET ALL THERE </SignUp>
        <Description>
          Story of a mother and her son. More realistic than you expect, rich
          nuanced, admirable crafted, using the perfect music and exploring each
          moment of the way from kid to adult. Charming , seductive, touching,
          admirable are only words in this case. In essence, a great short
          animation. The story reminds Little Tumbling but, in same measure, it
          is a splendid portrait of the essence of motherhood and that is its
          basic virtue. Short, just special. Or, pure delightful, for wise mix
          ox of smile and tears. Like each portrait of mother.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png"/>
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background: url("/images/login-background.jpg") center center / cover
      no-repeat fixed;
    background-position: top;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    // because of this z index background image is always behind each content
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;
const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-botton: 12px;

  &:hover {
    background: #0483ee;
  }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`
