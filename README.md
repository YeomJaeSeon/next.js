- css in js의 styled-components는 별도의 설정없이는 SSR을 기본으로하는 next.js에서 적용이안됨 - 서버에서 해당 컴포넌트 다 만들어서 클라이언트에게 주기 때문에 js로드되기전에 HTML파일만서버에서 다 만들면
바로 클라이언트에게 제공 -> styled-components 적용안됨  
- index.html격인 _document.js파일에서 serverStyleSheet을 설정해주면 된다.  
- 공통의 컴포넌트 사용할때는 {props.children}으로 하위 컴포넌트 정의해줘야 하위컴포넌트 랜더링 된다.  
- pages 디렉토리는 필수 디렉토리 이자 라우팅될때 사용되므로 해당 디렉토리 내의 폴더나 파일 만드는데 주의해서 만들자  
- url보다는 useRouter, withRouter  
- query문자열로 동적 라우팅할때는 Link as의 clean url사용할수 있는데 해당 clean url은 실제로 존재하는 url이 아니므로 커스텀 서버를 지정해줘서 실제 존재하는 pages폴더내의 파일과 연결시켜주는
작업이 필요하다.  
