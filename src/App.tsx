import React, { useState, useEffect } from 'react';
import { 
  Activity,
  BarChart3, 
  Brain, 
  DollarSign, 
  LineChart, 
  ShieldCheck, 
  Zap,
  Sun,
  Moon
} from 'lucide-react';
import ContactForm from './components/ContactForm';
import FeatureCard from './components/FeatureCard';
import IndustryCard from './components/IndustryCard';
import HeaderTitle from './components/HeaderTitle';
import Grid from './components/Grid';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
  }
`;

const lightTheme = {
  body: '#f8fafc',
  text: '#1e293b',
  background: '#ffffff',
  border: '#e2e8f0',
};

const darkTheme = {
  body: '#1e293b',
  text: '#f8fafc',
  background: '#334155',
  border: '#475569',
};

const Container = styled.div`
  min-height: 100vh;
`;

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  background: ${({ theme }) => theme.background};
  backdrop-filter: blur(10px);
  z-index: 50;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
`;

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  background: linear-gradient(to right, #06b6d4, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  color: transparent;
  animation: logo-gradient 3s infinite;
`;

const Header = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  padding: 96px 24px 48px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderContent = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderDescription = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 32px;
  font-weight: medium;
  line-height: 1.75;
  padding: 0 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 24px;
  // background: linear-gradient(to right, #06b6d4, #3b82f6);
  background: #64748b;
  color: #ffffff;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  transition: all 0.3s;
  &:hover {
    background: linear-gradient(to right, #06b6d4, #3b82f6);
    box-shadow: 0 4px 6px rgba(6, 182, 212, 0.25);
    transform: scale(1.05);
  }
`;

const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 64px 24px;
  background: ${({ theme }) => theme.background};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
`;

const IndustrySection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 64px 24px;
`;

const IndustryGrid = styled.div`
  display: grid;
  gap: 24px;
  max-width: 768px;
  margin: 0 auto;
  /* 默认 1*4 布局 */
  grid-template-columns: repeat(1, 1fr);

  /* 屏幕宽度大于 600px 时使用 2x2 布局 */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // /* 屏幕宽度大于 900px 时使用 4x1 布局 */
  // @media (min-width: 900px) {
  //   grid-template-columns: repeat(4, 1fr);
  // }
`;

const CTASection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 64px 24px;
`;

const CTAContainer = styled.div`
  // background: linear-gradient(to right, #06b6d4, #3b82f6);
  background: #64748b;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
  color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
`;

const CTATitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const CTADescription = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 24px;
`;

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const [formState, setFormState] = useState({
    isOpen: false,
    source: ''
  });

  const openForm = (source: string) => setFormState({ isOpen: true, source });
  const closeForm = () => setFormState({ isOpen: false, source: '' });

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Nav>
          <NavContainer>
            <LogoContainer>
              <Activity 
                width={24} 
                height={24} 
                strokeWidth={2.5}
                style={{
                  stroke: 'url(#logo-gradient-animated)',
                  filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.2))'
                }}
              />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="logo-gradient-animated" x1="0%" y1="0%" x2="100%">
                    <stop offset="0%" stopColor="#06b6d4">
                      <animate
                        attributeName="offset"
                        values="0;0.5;0"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="50%" stopColor="#3b82f6">
                      <animate
                        attributeName="offset"
                        values="0.5;1;0.5"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="100%" stopColor="#8b5cf6">
                      <animate
                        attributeName="offset"
                        values="1;1.5;1"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </stop>
                  </linearGradient>
                </defs>
              </svg>
              <LogoText>
                Howmuch.ai
              </LogoText>
            </LogoContainer>
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <a href="#features" style={{ color: '#64748b', transition: 'color 0.3s' }}>产品特性</a>
              <a href="#industries" style={{ color: '#64748b', transition: 'color 0.3s' }}>行业方案</a>
              <button
                onClick={toggleDarkMode}
                style={{ 
                  padding: '8px', 
                  borderRadius: '8px', 
                  background: !isDark ? '#ffffff' : '#1e293b', 
                  transition: 'background-color 0.3s',
                  border: 'none',
                }}
                aria-label="切换暗色模式"
              >
                {isDark ? (
                  <Sun width={20} height={20} style={{ color: '#f59e0b' }} />
                ) : (
                  <Moon width={20} height={20} style={{ color: '#64748b' }} />
                )}
              </button>
              <button 
                onClick={() => openForm('demo')}
                style={{ 
                  padding: '8px 16px', 
                  // background: 'linear-gradient(to right, #06b6d4, #3b82f6)', 
                  background: !isDark ? '#ffffff' : '#1e293b',
                  color: isDark ? '#64748b' : '#1e293b',
                  borderRadius: '8px', 
                  border: isDark? 'none': '1px solid #64748b',
                  fontWeight: 'medium', 
                  transition: 'all 0.3s' }}
              >
                预约演示
              </button>
            </div>
          </NavContainer>
        </Nav>

        <Header>
          <HeaderContent>
            <HeaderTitle isDark={isDark}>
              量化价值 · 驱动决策
            </HeaderTitle>
            <HeaderDescription>
              人工智能驱动的动态定价、资产评估和数据决策解决方案
            </HeaderDescription>
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              justifyContent: 'center',
              width: '80%', 
              }}>
              <Button onClick={() => openForm('demo')} style={{ background: isDark?'#64748b':'gray' }}>
                预约演示
              </Button>
              <Button onClick={() => openForm('join')} style={{ background: isDark?'#64748b':'gray' }}>
                加入我们
              </Button>
            </div>
          </HeaderContent>
        </Header>

        <Section id="features">
          <br/>
          <Grid>
            <FeatureCard
              icon={<BarChart3 width={32} height={32} style={{ color: '#06b6d4' }} />}
              title="动态定价引擎"
              description="为电商和共享经济平台提供实时价格优化"
              isDark={isDark}
            />
            <FeatureCard
              icon={<Brain width={32} height={32} style={{ color: '#d946ef' }} />}
              title="AI 驱动分析"
              description="先进的机器学习算法实现精准价值评估"
              isDark={isDark}
            />
            <FeatureCard
              icon={<DollarSign width={32} height={32} style={{ color: '#f97316' }} />}
              title="资产评估"
              description="数字资产和数据组合的精确估值"
              isDark={isDark}
            />
            <FeatureCard
              icon={<LineChart width={32} height={32} style={{ color: '#ec4899' }} />}
              title="风险评估"
              description="全面的风险分析和管理解决方案"
              isDark={isDark}
            />
            <FeatureCard
              icon={<ShieldCheck width={32} height={32} style={{ color: '#f59e0b' }} />}
              title="数据安全"
              description="企业级敏感金融数据安全保护"
              isDark={isDark}
            />
            <FeatureCard
              icon={<Zap width={32} height={32} style={{ color: '#14b8a6' }} />}
              title="实时洞察"
              description="即时分析和决策支持系统"
              isDark={isDark}
            />
          </Grid>
        </Section>

        <IndustrySection id="industries">
          <br/>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '48px' }}>
            跨行业信任之选
          </h2>
          <IndustryGrid>
            <IndustryCard
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              title="金融科技"
              description="为金融机构提供资产评估和风险评估"
            />
            <IndustryCard
              image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800"
              title="电子商务"
              description="动态定价和库存优化解决方案"
            />
            <IndustryCard
              image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
              title="企业服务"
              description="成本优化和资源分配工具"
            />
            <IndustryCard
              image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
              title="数据资产"
              description="数据变现和价值量化"
            />
          </IndustryGrid>
        </IndustrySection>

        <CTASection>
          <CTAContainer style={{background:isDark?'#64748b':'gray'}}>
            <CTATitle>
              准备好释放 AI 驱动分析的力量了吗？
            </CTATitle>
            <CTADescription>
              立即开始免费试用，体验 Howmuch.ai 如何改变您的商业决策。
            </CTADescription>
            <Button onClick={() => openForm('start')} style={{ background: isDark?'#1e293b':'#64748b' }}>
              立即开始
            </Button>
          </CTAContainer>
        </CTASection>

        <ContactForm 
          isOpen={formState.isOpen}
          onClose={closeForm}
          source={formState.source}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;