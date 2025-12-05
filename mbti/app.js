const MBTI_DATA = {
  INTJ: {
    label: 'INTJ · 전략가',
    tagline: '미래를 예측하고 복잡한 시스템을 설계하는 데 능숙한 전략가입니다.',
    description:
      '독립적으로 사고하며 높은 기준을 추구합니다. 지적 호기심이 강하며, 비효율적인 것을 참지 못하고 개선책을 찾아내는 데에서 만족을 느낍니다.',
    strengths: ['시스템 분석', '장기 계획', '논리적 사고'],
    recommendedMajors: ['컴퓨터 공학', '경제학', '물리학', '건축학', '철학'],
    relatedJobs: ['소프트웨어 개발자', '데이터 과학자', '경영 컨설턴트', '대학교수', '투자 분석가'],
    recommendedActivities: [
      '개인 프로젝트(코딩, 연구) 진행하기',
      '체스나 전략 보드게임 즐기기',
      '관심 분야의 다큐멘터리나 심층 기사 찾아보기',
      '독서 클럽이나 토론 그룹에 참여하여 아이디어 교환하기',
    ],
  },
  INTP: {
    label: 'INTP · 사색가',
    tagline: '논리와 분석으로 세상을 이해하는 탐구적인 사색가입니다.',
    description:
      '지적 호기심이 왕성하며, 복잡한 문제를 해결하는 과정 자체를 즐깁니다. 추상적인 개념과 이론을 탐구하는 것을 선호하며, 기존의 방식에 의문을 제기합니다.',
    strengths: ['논리 분석', '패턴 인식', '창의적 문제 해결'],
    recommendedMajors: ['수학과', '컴퓨터 과학', '물리학', '언어학', '게임 개발'],
    relatedJobs: ['인공지능 연구원', '데이터 분석가', '철학자', '게임 개발자', '학술 연구원'],
    recommendedActivities: [
      '새로운 프로그래밍 언어 배우기',
      '과학 박물관이나 플라네타리움 방문하기',
      '관심 있는 주제에 대해 위키나 블로그 글 작성하기',
      '퍼즐이나 논리 게임 풀기',
    ],
  },
  ENTJ: {
    label: 'ENTJ · 지휘관',
    tagline: '타고난 리더십과 비전으로 팀을 이끌어 목표를 달성하는 지휘관입니다.',
    description:
      '결단력과 추진력이 강하며, 비효율을 개선하고 시스템을 구축하는 데 뛰어납니다. 장기적인 목표를 설정하고, 이를 달성하기 위해 사람과 자원을 효율적으로 관리합니다.',
    strengths: ['리더십', '전략 기획', '효율성 추구'],
    recommendedMajors: ['경영학', '정치외교학', '법학', '산업 공학', '금융학'],
    relatedJobs: ['CEO', '경영 컨설턴트', '변호사', '프로젝트 매니저', '정치인'],
    recommendedActivities: [
      '학생회나 동아리 리더 역할 맡기',
      '창업 경진대회나 비즈니스 케이스 스터디 참여하기',
      '토론이나 스피치 클럽 활동하기',
      '리더십 관련 서적이나 강연 찾아보기',
    ],
  },
  ENTP: {
    label: 'ENTP · 발명가',
    tagline: '끊임없이 새로운 아이디어를 탐구하며 논쟁을 즐기는 발명가입니다.',
    description:
      '지적인 도전을 즐기며, 기존의 틀을 깨고 새로운 가능성을 모색합니다. 빠른 두뇌 회전과 재치 있는 입담으로 사람들과의 토론을 주도하는 것을 좋아합니다.',
    strengths: ['혁신적 사고', '다각적 접근', '지적 토론'],
    recommendedMajors: ['신문방송학', '마케팅', '정치학', '기업가정신', '문화인류학'],
    relatedJobs: ['기업가', '마케터', '저널리스트', '광고 기획자', '정치 컨설턴트'],
    recommendedActivities: [
      '다양한 주제의 유튜브 채널이나 팟캐스트 운영하기',
      '해커톤이나 아이디어톤 참여하기',
      '새로운 분야의 단기 클래스나 워크숍 참여하기',
      '디베이트 클럽에서 다양한 주제로 토론하기',
    ],
  },
  INFJ: {
    label: 'INFJ · 옹호자',
    tagline: '깊은 통찰력과 강한 신념으로 세상을 더 나은 곳으로 만들고자 하는 옹호자입니다.',
    description:
      '타인의 감정을 깊이 이해하고 공감하며, 자신의 가치와 신념에 따라 행동합니다. 의미 있는 관계를 중시하며, 인류에 긍정적인 영향을 미치는 일에 보람을 느낍니다.',
    strengths: ['통찰력', '공감 능력', '신념'],
    recommendedMajors: ['심리학', '상담학', '사회복지학', '교육학', '문예 창작'],
    relatedJobs: ['상담사', '사회복지사', '교사', '작가', '비영리 단체 활동가'],
    recommendedActivities: [
      '자원봉사 활동에 참여하여 사회에 기여하기',
      '시, 소설 등 문학 작품 창작 활동하기',
      '명상이나 요가를 통해 내면을 성찰하는 시간 갖기',
      '소규모 독서 모임에서 깊이 있는 대화 나누기',
    ],
  },
  INFP: {
    label: 'INFP · 중재자',
    tagline: '이상적인 세상을 꿈꾸며, 따뜻한 마음으로 사람들을 돕는 중재자입니다.',
    description:
      '자신의 가치관과 신념을 중요하게 생각하며, 창의적이고 개성 있는 방식으로 자신을 표현합니다. 이해심이 많고 개방적이어서 다른 사람의 가능성을 발견하고 지지해줍니다.',
    strengths: ['창의성', '공감', '가치 추구'],
    recommendedMajors: ['문예 창작', '미술', '음악', '심리학', '사회학'],
    relatedJobs: ['작가', '예술가', '심리상담사', '그래픽 디자이너', '콘텐츠 크리에이터'],
    recommendedActivities: [
      '글쓰기, 그림 그리기, 악기 연주 등 창작 활동하기',
      '독립 영화나 예술 영화 감상하기',
      '관심 있는 사회적 가치를 지지하는 캠페인 참여하기',
      '자연 속에서 산책하며 영감 얻기',
    ],
  },
  ENFJ: {
    label: 'ENFJ · 지도자',
    tagline: '사람들에게 영감을 주며, 함께 성장하고 발전하는 것을 이끄는 지도자입니다.',
    description:
      '타고난 공감 능력과 소통 능력으로 사람들을 이끌고 동기를 부여합니다. 다른 사람의 성장을 돕는 것에서 큰 보람을 느끼며, 공동체의 화합과 발전을 중요하게 생각합니다.',
    strengths: ['사회성', '리더십', '동기 부여'],
    recommendedMajors: ['교육학', '상담심리학', '언론정보학', '인사 관리', '사회복지학'],
    relatedJobs: ['교사', '인사(HR) 전문가', '상담사', '이벤트 기획자', '영업 관리자'],
    recommendedActivities: [
      '멘토링 프로그램에 참여하여 후배 돕기',
      '팀 프로젝트나 스터디 그룹 리드하기',
      '연극이나 뮤지컬 동아리 활동하기',
      '지역 사회 행사 기획 및 참여하기',
    ],
  },
  ENFP: {
    label: 'ENFP · 활동가',
    tagline: '열정과 호기심으로 가득 차, 새로운 가능성을 찾아 나서는 활동가입니다.',
    description:
      '상상력이 풍부하고 에너지가 넘치며, 사람들과 어울리는 것을 좋아합니다. 반복적인 일상보다는 새롭고 흥미로운 도전을 즐기며, 긍정적인 에너지로 주변에 활기를 불어넣습니다.',
    strengths: ['상상력', '사교성', '긍정적 태도'],
    recommendedMajors: ['광고홍보학', '디자인', '연기', '관광경영학', '이벤트 기획'],
    relatedJobs: ['카피라이터', '배우', '여행 가이드', '유튜버', '파티 플래너'],
    recommendedActivities: [
      '새로운 장소로 즉흥 여행 떠나기',
      '다양한 분야의 사람들과 교류할 수 있는 소셜 모임 참여하기',
      '축제나 콘서트 등 활기찬 행사 참여하기',
      '브이로그나 팟캐스트를 통해 자신의 경험 공유하기',
    ],
  },
  ISTJ: {
    label: 'ISTJ · 청지기',
    tagline: '책임감과 성실함으로 주어진 임무를 완수하는 현실적인 청지기입니다.',
    description:
      '사실과 원칙에 기반하여 체계적으로 일 처리하는 것을 선호합니다. 신중하고 책임감이 강하며, 한번 맡은 일은 끝까지 완수하는 믿음직한 사람입니다.',
    strengths: ['책임감', '체계성', '정확성'],
    recommendedMajors: ['회계학', '법학', '행정학', '컴퓨터 공학(보안)', '문헌정보학'],
    relatedJobs: ['회계사', '법률가', '공무원', '시스템 관리자', '데이터베이스 관리자'],
    recommendedActivities: [
      '꼼꼼함이 필요한 DIY 프로젝트나 모델 조립하기',
      '역사 소설을 읽거나 역사 다큐멘터리 시청하기',
      '체계적인 계획을 세워 국내 여행하기',
      '규칙과 절차가 중요한 스포츠(예: 양궁, 바둑) 즐기기',
    ],
  },
  ISFJ: {
    label: 'ISFJ · 수호자',
    tagline: '따뜻한 마음과 헌신으로 주변 사람들을 돌보는 섬세한 수호자입니다.',
    description:
      '책임감이 강하고 성실하며, 다른 사람을 돕는 것에서 큰 보람을 느낍니다. 구체적이고 실용적인 방식으로 다른 사람에게 도움을 주는 것을 선호하며, 주변 환경을 안정적으로 유지하려 합니다.',
    strengths: ['헌신', '공감', '세심함'],
    recommendedMajors: ['간호학', '유아 교육', '사회복지학', '의학', '영양학'],
    relatedJobs: ['간호사', '유치원 교사', '물리치료사', '영양사', '수의사'],
    recommendedActivities: [
      '가족이나 친구를 위해 요리나 베이킹하기',
      '반려동물을 돌보거나 유기동물 보호소에서 봉사하기',
      '식물 키우기나 정원 가꾸기',
      '앨범이나 스크랩북을 만들며 추억 정리하기',
    ],
  },
  ESTJ: {
    label: 'ESTJ · 경영자',
    tagline: '체계적인 시스템과 명확한 규칙으로 조직을 효율적으로 관리하는 경영자입니다.',
    description:
      '현실적이고 실용적이며, 객관적인 사실에 근거하여 신속하게 의사결정을 내립니다. 조직을 이끌고 프로젝트를 관리하는 데 뛰어난 능력을 발휘하며, 정해진 절차를 따르는 것을 중요하게 생각합니다.',
    strengths: ['조직 관리', '추진력', '결단력'],
    recommendedMajors: ['경영학', '행정학', '건축 공학', '산업 심리학', '경제학'],
    relatedJobs: ['관리자(매니저)', '경찰관', '판사', '건설 감독', '재무 분석가'],
    recommendedActivities: [
      '팀 스포츠에 참여하여 리더 역할 수행하기',
      '가구나 전자제품 조립 등 실용적인 프로젝트 수행하기',
      '지역 사회나 동호회에서 총무나 운영진 역할 맡기',
      '효율적인 여행 계획 세우고 실행하기',
    ],
  },
  ESFJ: {
    label: 'ESFJ · 사교가',
    tagline: '따뜻한 관심과 사교적인 성격으로 주변 사람들을 챙기고 조화를 이끄는 사교가입니다.',
    description:
      '다른 사람의 감정에 민감하며, 주변 사람들과 조화로운 관계를 유지하는 것을 중요하게 생각합니다. 실질적인 도움을 주는 것을 좋아하며, 사교적인 모임을 통해 에너지를 얻습니다.',
    strengths: ['협업 능력', '공감', '실용적 도움'],
    recommendedMajors: ['호텔경영학', '비서학', '초등 교육', '홍보학', '사회복지학'],
    relatedJobs: ['호텔리어', '비서', '초등학교 교사', '홍보 담당자', '고객 서비스 매니저'],
    recommendedActivities: [
      '친구들과 함께하는 파티나 모임 주최하기',
      '자선 행사나 지역 축제에서 자원봉사하기',
      '쿠킹 클래스나 댄스 강좌 등 그룹 활동 참여하기',
      '주변 사람들의 기념일을 챙기고 축하해주기',
    ],
  },
  ISTP: {
    label: 'ISTP · 장인',
    tagline: '도구를 능숙하게 다루며, 위기 상황에서 뛰어난 문제 해결 능력을 보여주는 장인입니다.',
    description:
      '호기심이 많고 관찰력이 뛰어나며, 직접 경험을 통해 배우는 것을 선호합니다. 논리적이고 분석적이며, 최소한의 노력으로 최대의 효율을 내는 실용적인 해결책을 찾아냅니다.',
    strengths: ['문제 해결', '도구 활용', '위기 대처'],
    recommendedMajors: ['기계 공학', '컴퓨터 공학', '항공 우주 공학', '응급 구조학', '스포츠 과학'],
    relatedJobs: ['엔지니어', '파일럿', '소방관', '운동선수', '카레이서'],
    recommendedActivities: [
      '자전거나 자동차 등 기계 분해 및 조립하기',
      '코딩이나 프로그래밍으로 실제 문제 해결하기',
      '암벽 등반, 서핑 등 도전적인 스포츠 즐기기',
      '목공이나 가죽 공예 등 손으로 만드는 활동하기',
    ],
  },
  ISFP: {
    label: 'ISFP · 예술가',
    tagline: '오감으로 세상을 느끼며, 아름다움을 창조하고 경험하는 것을 즐기는 예술가입니다.',
    description:
      '개방적이고 유연하며, 현재의 순간을 즐기는 데 집중합니다. 미적 감각이 뛰어나며, 자신만의 독창적인 스타일로 아름다움을 표현하는 것을 좋아합니다.',
    strengths: ['미적 감각', '융통성', '겸손함'],
    recommendedMajors: ['디자인', '순수 미술', '음악', '패션', '요리학'],
    relatedJobs: ['디자이너', '음악가', '패션 디자이너', '요리사', '플로리스트'],
    recommendedActivities: [
      '미술관이나 디자인 전시회 방문하기',
      '자신만의 스타일로 공간을 꾸미거나 옷을 리폼하기',
      '자연 풍경을 사진이나 그림으로 담아내기',
      '새로운 맛집을 탐방하거나 직접 요리하기',
    ],
  },
  ESTP: {
    label: 'ESTP · 기업가',
    tagline: '넘치는 에너지와 뛰어난 현실 감각으로 스릴 넘치는 도전을 즐기는 기업가입니다.',
    description:
      '실용적이고 활동적이며, 이론보다는 직접 행동으로 부딪히며 배우는 것을 선호합니다. 사교성이 뛰어나고 유머 감각이 있어 주변에 활기를 불어넣으며, 위기 상황에 대처하는 능력이 뛰어납니다.',
    strengths: ['현실 감각', '문제 해결', '사교성'],
    recommendedMajors: ['체육학', '경영학(창업)', '마케팅', '연극 영화', '호텔 조리'],
    relatedJobs: ['운동선수', '사업가', '영업사원', '배우', '경매사'],
    recommendedActivities: [
      '익스트림 스포츠나 새로운 운동에 도전하기',
      '친구들과 함께 즉흥적으로 여행 떠나기',
      '플리마켓이나 중고 거래를 통해 직접 물건 판매해보기',
      '사람들 앞에서 발표하거나 공연할 기회 만들기',
    ],
  },
  ESFP: {
    label: 'ESFP · 연예인',
    tagline: '타고난 스타성과 유머 감각으로 사람들에게 즐거움을 선사하는 연예인입니다.',
    description:
      '사교적이고 낙천적이며, 스포트라이트를 받는 것을 즐깁니다. 현재의 순간을 만끽하며, 사람들과 어울리고 즐거운 경험을 공유하는 것에서 에너지를 얻습니다.',
    strengths: ['사교성', '즉흥성', '긍정적 에너지'],
    recommendedMajors: ['연극 영화', '실용 음악', '방송 연예', '관광학', '이벤트 매니지먼트'],
    relatedJobs: ['배우', '가수', 'MC', '뷰티 아티스트', '파티 플래너'],
    recommendedActivities: [
      '노래방이나 댄스 동호회에서 끼 발산하기',
      'SNS에 자신의 일상이나 재능을 담은 콘텐츠 공유하기',
      '패션쇼나 뷰티 박람회 등 화려한 행사 참여하기',
      '친구들과 함께 파티를 계획하고 즐기기',
    ],
  },
};

const TYPE_ORDER = Object.keys(MBTI_DATA);
const e = React.createElement;

const SectionList = ({ title, items }) =>
  e(React.Fragment, null, [
    e('p', { className: 'section-title', key: `${title}-title` }, title),
    e(
      'ul',
      { key: `${title}-list` },
      items.map((item) => e('li', { key: item }, item))
    ),
  ]);

const ResultCard = React.forwardRef(({ data }, ref) =>
  e('article', { className: 'result-card', ref }, [
    e('div', { className: 'result-header', key: 'header' }, [
      e('span', { className: 'tagline', key: 'tagline' }, data.tagline),
      e('h2', { key: 'title' }, data.label),
      e('p', { key: 'desc' }, data.description),
      e(
        'div',
        { className: 'badges', key: 'badges' },
        data.strengths.map((strength) => e('span', { className: 'badge', key: strength }, strength))
      ),
    ]),
    e(SectionList, { title: '추천 전공', items: data.recommendedMajors, key: 'majors' }),
    e(SectionList, { title: '관련 직업', items: data.relatedJobs, key: 'jobs' }),
    e(SectionList, { title: '추천 활동', items: data.recommendedActivities, key: 'activities' }),
  ])
);

function App() {
  const [selectedType, setSelectedType] = React.useState(TYPE_ORDER[0]);
  const [toast, setToast] = React.useState('');
  const resultRef = React.useRef(null);
  const data = MBTI_DATA[selectedType];

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get('type');
    if (typeParam && MBTI_DATA[typeParam]) {
      setSelectedType(typeParam);
    }
  }, []);

  React.useEffect(() => {
    const url = new URL(window.location.toString());
    url.searchParams.set('type', selectedType);
    window.history.replaceState({}, '', url);
  }, [selectedType]);

  const triggerToast = (message) => {
    setToast(message);
    if (message) {
      setTimeout(() => setToast(''), 2500);
    }
  };

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?type=${selectedType}`;
    const text = `${data.label} 맞춤 전공 추천을 확인해보세요.`;

    try {
      if (navigator.share) {
        await navigator.share({ title: 'MBTI 맞춤 전공 추천', text, url: shareUrl });
        triggerToast('공유를 전송했어요!');
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${text}\n${shareUrl}`);
        triggerToast('링크를 복사했어요.');
      } else {
        triggerToast('이 브라우저에서는 공유를 지원하지 않아요.');
      }
    } catch (error) {
      console.error(error);
      triggerToast('공유 중 오류가 발생했어요.');
    }
  };

  const handleSaveImage = async () => {
    if (!window.html2canvas || !resultRef.current) {
      triggerToast('이미지 저장을 지원하지 않는 환경입니다.');
      return;
    }

    try {
      const canvas = await window.html2canvas(resultRef.current, {
        backgroundColor: '#16213d',
      });
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `mbti_${selectedType}_major_recommendation.png`;
      link.click();
      triggerToast('이미지로 저장했어요.');
    } catch (error) {
      console.error(error);
      triggerToast('이미지 저장에 실패했어요.');
    }
  };

  return e('main', null, [
    e('header', { key: 'header' }, [
      e('h1', { className: 'main-title', key: 'title' }, '🎓 MBTI 맞춤 전공 추천기'),
      e(
        'p',
        { className: 'lead', key: 'lead' },
        '자신의 성격 유형에 맞는 추천 전공, 관련 직업, 추천 활동을 확인해보세요.'
      ),
    ]),
    e(
      'section',
      { className: 'button-grid', 'aria-label': 'MBTI 유형 선택', key: 'buttons' },
      TYPE_ORDER.map((type) =>
        e(
          'button',
          {
            key: type,
            className: type === selectedType ? 'active' : '',
            onClick: () => setSelectedType(type),
            type: 'button',
          },
          type
        )
      )
    ),
    e(ResultCard, { data, ref: resultRef, key: 'card' }),
    e('div', { className: 'actions', key: 'actions' }, [
      e(
        'button',
        { type: 'button', onClick: handleSaveImage, key: 'save' },
        '결과 이미지를 저장하기'
      ),
      e(
        'button',
        { type: 'button', onClick: handleShare, key: 'share' },
        '링크 공유하기'
      ),
    ]),
    toast
      ? e('div', { className: 'badge', style: { marginTop: 20 }, key: 'toast' }, toast)
      : null,
  ]);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));
