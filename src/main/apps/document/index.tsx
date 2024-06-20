import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  Divider as MuiDivider,
} from "@mui/material";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Title = styled(Typography)`
  font-weight: bold;
  margin-bottom: 20px;
`;

const SectionTitle = styled(Typography)`
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const SubSectionTitle = styled(Typography)`
  font-weight: bold;
  margin-top: 20px;
`;

const Divider = styled(MuiDivider)`
  margin: 20px 0;
  height: 2px;
  background-color: black;
`;

const Document: React.FC = () => {
  return (
    <StyledContainer maxWidth="md">
      <Title variant="h3">Jekoo's React Template</Title>
      <Divider />
      <SectionTitle variant="h5">설명</SectionTitle>
      <Typography paragraph>
        Fuse-React를 참고, Deprecated된 부분, 실용성이 없는 부분 제외, React
        교육 및 웹 애플리케이션 제작에 재사용 가능한 템플릿을 초기 기본
        프로젝트에서 시작하여 작성.
      </Typography>

      <SectionTitle variant="h5">만들게 된 계기 - 임시</SectionTitle>
      <List>
        <ListItem>
          <Typography variant="body1">
            • Fuse-React에 분명 배울 점이 많지만, React를 1년 배우고 많이 해온
            나에게만 해당되는 이야기라고 생각.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            • 처음 배우는 사람들에겐 이해하기 힘든 기법들 많이 사용.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            • 폴더 및 파일 명, naming에 fuse가 너무 많이 들어가서 직관적이지
            않음.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            • Fuse에서 가르치고자 하는 내용들을 유지 하되, 보다 간결한 템플릿을
            작성하고자 함.
          </Typography>
        </ListItem>
      </List>

      <SectionTitle variant="h5">Fuse의 기능적 문제점</SectionTitle>
      <List>
        <ListItem>
          <Typography variant="body1">
            • Deprecated되거나 대체된 부분들:
          </Typography>
        </ListItem>
        <List sx={{ pl: 4 }}>
          <ListItem>
            <Typography variant="body2">- mui/styles</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">- Hidden Component</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">- history</Typography>
          </ListItem>
        </List>
        <ListItem>
          <Typography variant="body1">• 실용성이 떨어지는 부분:</Typography>
        </ListItem>
        <List sx={{ pl: 4 }}>
          <ListItem>
            <Typography variant="body2">
              - 정적 Data들을 redux에 보관하는 부분 (NavBar 아이템의 이름)
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              - CacheProvider : 언어 방향(rtl, ltr)에서만 유용 - 언어 방향
              기능이 실용성 떨어짐.
            </Typography>
          </ListItem>
        </List>
        <ListItem>
          <Typography variant="body1">• 지나친 설정:</Typography>
        </ListItem>
        <List sx={{ pl: 4 }}>
          <ListItem>
            <Typography variant="body2">
              - custom tailwind 설정이 1500줄, default tailwind에서 크게
              벗어나지도 않음
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              - 특정 컴포넌트에서만 사용하는 함수를 외부 클래스에 정의 &gt;
              useMemo로 대체
            </Typography>
          </ListItem>
        </List>
        <ListItem>
          <Typography variant="body1">• 사용하지 않는 코드:</Typography>
        </ListItem>
        <List sx={{ pl: 4 }}>
          <ListItem>
            <Typography variant="body2">
              - withReducer 등 - 혼란을 가져올 수 있음.
            </Typography>
          </ListItem>
        </List>
      </List>

      <SectionTitle variant="h5">구조</SectionTitle>
      <List>
        <ListItem>
          <Typography variant="body1">• Utils:</Typography>
        </ListItem>
        <List sx={{ pl: 4 }}>
          <ListItem>
            <Typography variant="body2">
              - CustomSuspense: Loading을 띄우기 위해 Customizing
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              - ErrorBoundary: 개발 편의성을 위해 (사실 필요 없을 것 같아, 제외
              고민 중)
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              - Loading: 향상된 사용자 경험을 위한 로딩화면
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              - lodash: 객체 결합 시 유용해서 사용.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              - SvgProvider: 코드 재사용성 및 보다 편하게 svg를 사용하기 위함.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              - ThemeProvider: Global로 적용되는 스타일 및 기본 테마 적용.
            </Typography>
          </ListItem>
        </List>
        <ListItem>
          <Typography variant="body1">• Config:</Typography>
        </ListItem>
        <List sx={{ pl: 4 }}>
          <ListItem>
            <Typography variant="body2">
              주요 설정인 theme, layout, setting, routes, api의 값 및 환경을
              제공하는 파일들. setting = theme + layout / redux에 주입되어
              reducer의 영향을 받아 설정을 관리하도록 하였음.
            </Typography>
          </ListItem>
        </List>
        <ListItem>
          <Typography variant="body1">• Main:</Typography>
        </ListItem>
        <List sx={{ pl: 4 }}>
          <ListItem>
            <Typography variant="body2">- apps: 주요 컨텐츠</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              - components: header, navbar 등 전역적으로 사용하는 컴포넌트들을
              담음
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              - layout: 화면에 컴포넌트를 배치. 주요 컨텐츠를 랜더할 때 동적
              라우팅을 적용하여 초기 랜더링 시간 단축.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              - constants: navbar의 컨텐츠 등 정적 데이터들을 담음
            </Typography>
          </ListItem>
        </List>
      </List>

      <SectionTitle variant="h5">템플릿 사용법</SectionTitle>
      <SubSectionTitle variant="h6">1. 메인 컨텐츠 추가의 경우</SubSectionTitle>
      <List>
        <ListItem>
          <Typography variant="body2">
            - main/apps/ 경로에 폴더를 만든 후 tsx 파일과 config 파일, 필요하면
            내부 컴포넌트 파일 작성 &gt; temp 컨텐츠 참고
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            - config 파일에서 작성한 route를 routesConfigs 파일에 추가
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            - navbar에 해당 컨텐츠 추가 - main/constants/ 경로의
            navBarContents.ts 파일에 route를 url의 value로 넣어서 작성
          </Typography>
        </ListItem>
      </List>

      <SubSectionTitle variant="h6">
        2. 테마 변경 및 추가의 경우
      </SubSectionTitle>
      <List>
        <ListItem>
          <Typography variant="body2">- themeConfig.ts 파일 수정</Typography>
        </ListItem>
      </List>

      <SubSectionTitle variant="h6">3. 레이아웃 변경 및 추가</SubSectionTitle>
      <List>
        <ListItem>
          <Typography variant="body2">- layoutConfig.ts 파일 수정</Typography>
        </ListItem>
      </List>
      <SectionTitle variant="h5">추가 예정</SectionTitle>
      <Typography paragraph>todo.txt 파일 참고 (root directory)</Typography>
    </StyledContainer>
  );
};

export default Document;
