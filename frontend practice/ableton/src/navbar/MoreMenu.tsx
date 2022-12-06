import Navbar from ".";
import { NavList, NavListItem, Text, Wrapper } from "./styles";

const MoreMenu: React.FC = () => {
  return (
    <Wrapper flexDirection="column">
      <Wrapper flexDirection="column" padding="1rem">
        <h3>More on Ableton.com:</h3>
        <NavList>
          <NavListItem>
            <Text>Blog</Text>
          </NavListItem>
          <NavListItem>
            <Text>Ableton for the Classroom</Text>
          </NavListItem>
          <NavListItem>
            <Text>Ableton for Colleges and Universities</Text>
          </NavListItem>
          <NavListItem>
            <Text>Certified Training</Text>
          </NavListItem>
          <NavListItem>
            <Text>About Ableton</Text>
          </NavListItem>
          <NavListItem>
            <Text>Apprenticeships</Text>
          </NavListItem>
        </NavList>
      </Wrapper>
      <Wrapper flexDirection="column" padding="1rem">
        <h3>More from Ableton:</h3>
        <NavList>
          <NavListItem>
            <Wrapper flexDirection="column" padding="1rem">
              <h3>Loop</h3>
              <Text>
                Watch Talks, Performances and Features from Ableton's Summit for
                Music Makers
              </Text>
            </Wrapper>
          </NavListItem>
          <NavListItem>
            <Wrapper flexDirection="column">
              <h3>Learning Music</h3>
              <Text>
                Learn the fundamentals of music making right in your browser.
              </Text>
            </Wrapper>
          </NavListItem>
          <NavListItem>
            <Wrapper flexDirection="column">
              <h3>Learning Synths</h3>
              <Text>
                Get started with synthesis using a web-based synth and
                accompanying lessons.
              </Text>
            </Wrapper>
          </NavListItem>
          <NavListItem>
            <Wrapper flexDirection="column">
              <h3>Making Music</h3>
              <Text>
                Some tips from 74 Creative Strategies for Electronic Producers.
              </Text>
            </Wrapper>
          </NavListItem>
        </NavList>
      </Wrapper>
    </Wrapper>
  );
};

export default MoreMenu;
