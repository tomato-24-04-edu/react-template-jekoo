import React from "react";

const TempPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 ">
      <div className="flex w-full h-full mt-10 py-10 text-3xl font-bold items-center justify-center">
        Temp page
      </div>
      <div className="text-2xl font-bold">
        Temp 페이지의 레이아웃은 헤더 등의 컴포넌트가 없습니다.
      </div>
      <div className="text-2xl font-bold">
        로그인 화면 등에 사용할 라우트 설정을 적용하였습니다.
      </div>
      <div className="text-2xl font-bold">브라우저의 뒤로가기 버튼을 이용하세요.</div>
    </div>
  );
};

export default TempPage;
