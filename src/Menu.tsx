import styled from "styled-components";
import menu from "./menu.json";
import Instagram from "./Instagram";

// Define types for menu items
interface MenuItemOption {
  size?: string;
  quantity?: string;
  price: string;
}

interface MenuItem {
  name: string;
  description?: string;
  options?: MenuItemOption[];
  price?: string;
  image?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

// Styled components
const Container = styled.div`
  min-height: 100vh;
  background-color: #f4e4bc;
  padding: 2rem 1rem;
  font-family: sans-serif;
`;

const MenuWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f4e4bc;
  color: #1a1a1a;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: JapaneseFont; /* Replace with your desired font */
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
`;

const ItemCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  margin-bottom: 1.5rem; /* Add margin to separate items */
`;

const ItemImageContainer = styled.div`
  max-width: 200px;
`;

const Image = styled.img`
  width: 100%;
`;

const ItemDetails = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const ItemName = styled.h3`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ItemDescription = styled.p`
  color: #4a4a4a;
  margin-bottom: 1rem;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceOption = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
`;

const Price = styled.span`
  font-weight: bold;
`;

const Footer = styled.div`
  background: black;
  color: white;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 8px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    align-items: center;
  }
`;

export default function MenuComponent() {
  const menuSections: MenuSection[] = menu;

  return (
    <Container>
      <MenuWrapper>
        <Title>멘야쿠마</Title>

        {/* 메뉴 섹션 */}
        {menuSections.map((section, idx) => (
          <Section key={idx}>
            <SectionTitle>{section.title}</SectionTitle>
            {section.items.map((item, itemIdx) => (
              <ItemCard key={itemIdx}>
                {item.image && (
                  <ItemImageContainer>
                    <Image src={item.image} alt={item.name} />
                  </ItemImageContainer>
                )}
                <ItemDetails>
                  <div>
                    <ItemName>{item.name}</ItemName>
                    <ItemDescription>{item.description}</ItemDescription>
                  </div>
                  <PriceContainer>
                    {item.options ? (
                      item.options.map((option, optionIdx) => (
                        <PriceOption key={optionIdx}>
                          <span>{option.size || option.quantity}</span>
                          <Price>￦{option.price}</Price>
                        </PriceOption>
                      ))
                    ) : (
                      <PriceOption>
                        <Price>₩{item.price}</Price>
                      </PriceOption>
                    )}
                  </PriceContainer>
                </ItemDetails>
              </ItemCard>
            ))}
          </Section>
        ))}

        {/* 하단 정보 */}
        <Footer>
          <FooterContent>
            <FooterText>
              <div>
                <span className="text-red-500 mr-2">■</span>
                <span>주소: 수원 팔달 인계동 1171 대로변 상가동</span>
              </div>
              <div>
                <span className="text-red-500 mr-2">■</span>
                <span>영업시간: 매일 10:00 열고 24:00 닫습니다.</span>
              </div>
              <div>
                <span className="text-red-500 mr-2">■</span>
                <span>문의전화: 0507-1395-9312</span>
              </div>
              <Instagram />
            </FooterText>
          </FooterContent>
        </Footer>
      </MenuWrapper>
    </Container>
  );
}
