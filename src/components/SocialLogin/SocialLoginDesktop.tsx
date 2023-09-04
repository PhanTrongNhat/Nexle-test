import {
  BreakLine,
  BreakText,
  Description,
  Icon,
  IconWrapper,
  Link,
  OptionWrapper,
  Wrapper,
} from './styled';
import { EmailIcon, FacebookIcon, GitIcon, TwitterIcon } from '../Icons';
import { SocialLoginType } from './index';

const SocialLoginDesktop = (data: SocialLoginType) => {
  return (
    <Wrapper>
      <OptionWrapper>
        <Description>
          {data.description}{' '}
          <Link onClick={() => data.action()}>{data.actionText}</Link>
        </Description>
      </OptionWrapper>
      <BreakLine>
        <BreakText>or</BreakText>
      </BreakLine>
      <IconWrapper>
        <Icon background={'rgb(59, 89, 152)'}>
          <FacebookIcon width={15} height={14}></FacebookIcon>
        </Icon>{' '}
        <Icon background={'rgb(0, 172, 238)'}>
          <TwitterIcon width={15} height={14}></TwitterIcon>
        </Icon>
        <Icon background={'rgb(219, 50, 5)'}>
          <EmailIcon width={15} height={14}></EmailIcon>
        </Icon>{' '}
        <Icon background={'rgb(33, 31, 31)'}>
          <GitIcon width={15} height={14}></GitIcon>
        </Icon>
      </IconWrapper>
    </Wrapper>
  );
};

export default SocialLoginDesktop;
