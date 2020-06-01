import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Head from 'next/head';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			background: 'linear-gradient(to right, #E0C3FC, #8EC5FC)',
			[theme.breakpoints.down('md')]: {
				height: 'auto'
			}
		},
		container: {
			display: 'flex',
			height: '100%',
			flexDirection: 'column',
			justifyContent: 'flex-end'
		},
		contentContainer: {
			backgroundColor: 'white'
		},
		typography: {
			color: 'white',
			textAlign: 'center',
			fontWeight: 700,
			[theme.breakpoints.down('md')]: {
				fontSize: 22
			}
		},
		icon: {
			verticalAlign: 'middle'
		},
		gridItem: {
			padding: theme.spacing(3, 0)
		},
		gridBox: {
			display: 'flex',
			justifyContent: 'flex-end'
		}
	})
);

function Privacy() {
	const classes = useStyles();

	return (
		<>
			<Head>
				<meta charSet={'utf-8'} />
				<meta httpEquiv={'content-language'} content={'ko'} />
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'author'} content={'개념글 저장소'} />
				<meta name={'title'} content={'개인정보처리방침 : 개념글 저장소'} />
				<meta name={'description'} content={'인기와 유머를 겸비한 게시글들을 한 눈에 확인해보세요!'} />
				<meta property={'og:title'} content={'개인정보처리방침 : 개념글 저장소'} />
				<meta property={'og:description'} content={'인기와 유머를 겸비한 게시글들을 한 눈에 확인해보세요!'} />
				<meta property={'og:type'} content={'website'} />
				<meta property={'og:image'} content={'/logo_prev.png'} />
				<meta property={'og:url'} content={'https://www.cocstorage.com/privacy'} />
				<meta property={'og:site_name'} content={'개념글 저장소'} />
				<meta property={'og:locale'} content={'ko_KR'} />
				<meta property={'twitter:title'} content={'개인정보처리방침 : 개념글 저장소'} />
				<meta property={'twitter:description'} content={'인기와 유머를 겸비한 게시글들을 한 눈에 확인해보세요!'} />
				<meta property={'twitter:image'} content={'/logo_prev.png'} />
				<meta property={'twitter:url'} content={'https://wwww.cocstorage.com/privacy'} />
				<meta property={'twitter:card'} content={'summary'} />
				<meta name={'theme-color'} content={'#2F436E'} />
				<meta name={'apple-mobile-web-app-title'} content={'개인정보처리방침 : 개념글 저장소'} />
				<title>{'개인정보처리방침 : 개념글 저장소'}</title>
				<link rel={'shortcut icon'} href={'/favicon.ico'} />
				<link rel={'apple-touch-icon'} href={'/logo_prev.png'} />
				<link rel={'canonical'} href={'https://www.cocstorage.com/privacy'} />
				<link rel={'manifest'} href={'/manifest.json'} />
			</Head>
			<Box className={classes.root}>
				<Container className={classes.container}>
					<Grid container justify={'space-between'}>
						<Grid className={classes.gridItem} item xs>
							<Typography className={classes.typography} variant={'h5'} component={'h5'}>
								<Box component={'span'} ml={1}>{'개인정보처리방침'}</Box>
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Container className={classes.contentContainer}>
				<Box mb={2} pt={1}>
					{'개념글 저장소는 이용자의 개인 정보보호를 매우 중요시하며 "정보통신망 이용촉진 및 정보보호 등에 관한 법률", "개인정보 보호법" 등 개인정보 보호 법령을 준수하고 있습니다. 관련 법률 및 정부 지침의 변경과 개념글 저장소의 약관 및 내부 방침에 따라 개인정보처리방침을 변경할 수 있으며 이를 개정하는 경우 홈페이지 공지를 통해 이용자에게 고지합니다.'}
				</Box>
				<Typography variant={'h6'} component={'h6'}>
					{'1. 개인정보 수집에 대한 동의'}
				</Typography>
				<List>
					<ListItem>
						{'개념글 저장소는 이용자가 회원가입을 할 경우(이하 “회원”이라 함) 개인정보 수집에 대하여 동의를 받고 있습니다. 회원가입 절차 중 이용약관 및 개인정보처리방침에 개인정보 수집 동의절차에서 해당 이용약관 동의란에 체크하게 되면 개인정보 수집에 대해 동의한 것으로 간주합니다.'}
					</ListItem>
				</List>
				<Typography variant={'h6'} component={'h6'}>
					{'2. 개인정보 수집항목 및 수집방법'}
				</Typography>
				<List>
					<ListItem>
						<Box>
							<Box>{'개념글 저장소는 원활한 서비스 제공을 위해 최소한의 개인정보를 수집하고있습니다.'}</Box>
							<Box mt={1} ml={2}>{'[일반 회원가입]'}</Box>
							<Box mt={1} ml={2}>{'- 개인 식별용값, 이름, 아이디, 비밀번호, 닉네임, 이메일'}</Box>
							<Box mt={1} ml={2}>{'[SNS 회원가입]'}</Box>
							<Box mt={1} ml={2}>{'- 개인 식별용값, 이름, 이메일'}</Box>
							<Box mt={1} ml={2}>{'[서비스 이용]'}</Box>
							<Box mt={1} ml={2}>{'- 서비스 이용 기록, IP주소'}</Box>
						</Box>
					</ListItem>
				</List>
				<Typography variant={'h6'} component={'h6'}>
					{'3. 개인정보의 수집목적 및 이용목적'}
				</Typography>
				<List>
					<ListItem>
						<Box>
							<Box>{'개념글 저장소는 정보서비스 목적 이외에는 귀하의 개인정보를 이용하지 않습니다. 다만 정보서비스의 질을 높이기 위한 통계분석, 설문조사 및 공지를 위해 이용할 수 있으며 관계법령에 의하여 수사상의 목적으로 관계기관으로부터의 요구가 있을 경우는 정보 제공이 가능합니다.'}</Box>
							<Box mt={1} ml={2}>{'[이름, 아이디, 비밀번호]'}</Box>
							<Box mt={1} ml={2}>{'- 본인 확인 및 개인 식별, 중복가입 방지'}</Box>
							<Box mt={1} ml={2}>{'[이메일]'}</Box>
							<Box mt={1} ml={2}>{'- 고지사항 및 서비스 이용 관련 사항 전달 등 의사소통'}</Box>
							<Box mt={1} ml={2}>{'[닉네임]'}</Box>
							<Box mt={1} ml={2}>{'- 서비스 기본 이용'}</Box>
							<Box mt={1} ml={2}>{'[IP주소, 접속 로그, 서비스 이용 기록]'}</Box>
							<Box mt={1} ml={2}>{'- 부정 이용 방지, 통계학적 분석에 사용'}</Box>
						</Box>
					</ListItem>
				</List>
				<Typography variant={'h6'} component={'h6'}>
					{'4. 개인정보 처리 및 보유 기간'}
				</Typography>
				<List>
					<ListItem>
						<Box>
							<Box>{'개념글 저장소는 회원의 회원가입일로부터 회원탈퇴와 같은 개인정보 수집, 이용, 제공에 대한 동의 철회 시까지 회원의 개인정보를 보유 및 이용하게 됩니다. 회원의 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이 달성된 시점에 지체없이 파기합니다.'}</Box>
							<Box mt={1} ml={2}>{'[수집 및 이용 목적이 달성된 시점]'}</Box>
							<Box mt={1} ml={2}>{'- 회원가입 정보 : 회원탈퇴와 같은 개인정보 수집, 이용, 제공에 대한 동의 철회 시'}</Box>
							<Box mt={1}>{'단, 다음의 정보에 대해서는 내부 방침(회원탈퇴일로부터 30일 보유) 및 관계법령에 따라 명시한 기간 동안 보관 후 파기합니다.'}</Box>
							<Box mt={1} ml={2}>{'- 개인 식별용값, 아이디, 이름, 닉네임, 이메일'}</Box>
							<Box mt={1} ml={2}>{'- 서비스를 불법/부정한 형태로 이용한 기록'}</Box>
							<Box mt={1}>{'관계볍령의 규정에 의하여 보관할 필요가 있는 경우 개념글 저장소는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관 후 파기합니다.'}</Box>
							<Box mt={1} ml={2}>{'- 서비스 이용 기록(저작물 작성시 IP), 회원 접속 정보(최종 접속 시간): 3개월 (통신비밀보호법)'}</Box>
							<Box mt={1} ml={2}>{'- 표시/광고에 관한 기록: 6개월 (전자상거래등에서의 소비자보호에 관한 법률)'}</Box>
							<Box mt={1} ml={2}>{'- 계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래등에서의 소비자보호에 관한 법률)'}</Box>
							<Box mt={1} ml={2}>{'- 대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래등에서의 소비자보호에 관한 법률)'}</Box>
							<Box mt={1} ml={2}>{'- 소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래등에서의 소비자보호에 관한 법률)'}</Box>
						</Box>
					</ListItem>
				</List>
				<Typography variant={'h6'} component={'h6'}>
					{'5. 개인정보의 파기절차 및 방법'}
				</Typography>
				<List>
					<ListItem>
						<Box>
							<Box>{'개념글 저장소의 개인정보 파기절차 및 방법은 다음과 같습니다.'}</Box>
							<Box mt={1} ml={2}>{'[절차]'}</Box>
							<Box mt={1} ml={2}>{'- 회원가입 등의 입력하신 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기됩니다.'}</Box>
							<Box mt={1} ml={2}>{'- 개인정보는 법률에 의한 경우를 제외하고서 보유되는 목적 이외의 다른 목적으로 이용되지 않습니다.'}</Box>
							<Box mt={1} ml={2}>{'[방법]'}</Box>
							<Box mt={1} ml={2}>{'- 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.'}</Box>
							<Box mt={1} ml={2}>{'- 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.'}</Box>
						</Box>
					</ListItem>
				</List>
				<Typography variant={'h6'} component={'h6'}>
					{'6. 개인정보 보관 및 보호를 위한 기술적, 관리적 대책'}
				</Typography>
				<List>
					<ListItem>
						<Box>
							<Box>{'개념글 저장소는 회원의 개인정보를 취급함에 있어 개인정보 분실, 도단, 누출, 변조 또는 훼손되지 않도록 안정성 확보를 위하여 다음과 같은 기술적, 관리적 대책을 강구합니다.'}</Box>
							<Box mt={1} ml={2}>{'- 회원가입 및 로그인 시 암호 알고리즘을 이용하여 네트워크상의 개인정보를 안전하게 전송할 수 있도록 Secured Socket Layer(SSL)를 채택하고 있습니다.'}</Box>
							<Box mt={1} ml={2}>{'- 회원의 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있습니다.'}</Box>
							<Box mt={1} ml={2}>{'- 개인정보에 대한 접근권한을 개인정보보호 책임자, 기타 업무상 개인정보의 처리가 불가피한 자로 제한하며, 그 이외의 인원이 개인정보에 접근하는 것을 허용하지 않습니다.'}</Box>
						</Box>
					</ListItem>
				</List>
				<Typography variant={'h6'} component={'h6'}>
					{'7. 개인정보 자동 수집 장치의 설치, 운영 및 거부에 관한 사항'}
				</Typography>
				<List>
					<ListItem>
						<Box>
							<Box>{'개념글 저장소는 홈페이지 방문자에게 적정한 서비스를 제공하기 위해서 이용자들의 정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버(HTTP)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터 내 하드디스크에 저장되기도 합니다.'}</Box>
							<Box mt={1} ml={2}>{'[쿠키의 사용 목적]'}</Box>
							<Box mt={1} ml={2}>{'- 개념글 저장소는 쿠키를 이용자들이 방문한 서비스의 웹사이트, 모바일 어플리케이션 등에 대한 방문 및 이용 행태, 인기 검색어, 이용자 규모 등을 파악하여, 이용자에게 최적화된 정보를 제공하기 위하여 사용합니다.'}</Box>
							<Box mt={1} ml={2}>{'[쿠키의 설치/운영 및 거부]'}</Box>
							<Box mt={1} ml={2}>{'- 이용자는 쿠키 설정에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저의 옵션을 설정함으로써, 쿠키가 저장될 때마다 확인하거나 모든 쿠키의 허용 또는 모든 쿠키의 저장을 거부할 수도 있습니다. 다만 쿠키의 저장을 거부할 경우에는 일부 서비스의 이용에 어려움이 있을 수 있습니다.'}</Box>
							<Box mt={1} ml={2}>{'- 쿠키의 설정 방법은 이용하시는 브라우저에 따라 다를 수 있으며, 일반적으로 ‘도구 > 인터넷 옵션 > 개인정보’ 등의 메뉴에서 설정할 수 있습니다.'}</Box>
							<Box mt={1} ml={2}>{'[구글 애널리틱스]'}</Box>
							<Box mt={1} ml={2}>{'- 개념글 저장소는 구글(Google)이 제공하는 웹 분석 서비스인 구글 애널리틱스(Google Analytics)를 이용하고 있습니다. 구글은 방문자가 사이트를 방문하여 어떻게 이용하는지 분석하는 도구를 제공함에 있어, 이용자에 대한 개인식별이 불가능한 수준의 정보(성별, 대략적인 연령대, 관심사에 관한 대략적인 정보 등)를 수집할 수 있습니다. 개념글 저장소와 구글은 구글 광고 쿠키, 익명 식별자, 구글 애널리틱스 쿠키 등을 이용하여 인구통계 정보 및 관심분야에 대한 정보를 수집하며, 이용자는 구글 애널리틱스 Opt-out Browser Add-on 을 이용하여 스스로를 구글의 프로그램에서 배제(opt-out)시킬 수 있습니다. 구글 애널리틱스 Opt-out Browser Add-on 은 https://tools.google.com/dlpage/gaoptout/를 방문하여 이용하실 수 있습니다.'}</Box>
						</Box>
					</ListItem>
				</List>
				<Typography variant={'h6'} component={'h6'}>
					{'8. 개인정보 보호책임자'}
				</Typography>
				<List>
					<ListItem>
						<Box>
							<Box>{'개념글 저장소는 회원의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 개인정보 보호책임자를 지정하고 있습니다.'}</Box>
							<Box mt={1} ml={2}>{'- 직위: 관리자'}</Box>
							<Box mt={1} ml={2}>{'- 이메일: cocstoragehelps@gmail.com'}</Box>
							<Box mt={1}>{'기타 개인정보침해에 대한 신고나 상담이 필요한 경우에는 아래 기관에 문의하시기 바랍니다.'}</Box>
							<Box mt={1} ml={2}>{'- 개인정보침해신고센터 (국번없이 118 / '}<a href={'https://privacy.kisa.or.kr'}>{'https://privacy.kisa.or.kr )'}</a></Box>
							<Box mt={1} ml={2}>{'- 대검찰청 사이버수사과 (국번없이 1301 / '}<a href={'https://www.spo.go.kr'}>{'https://www.spo.go.kr )'}</a></Box>
							<Box mt={1} ml={2}>{'- 경찰청 사이버안전국 (국번없이 182 / '}<a href={'https://cyberbureau.police.go.kr'}>{'https://cyberbureau.police.go.kr )'}</a></Box>
						</Box>
					</ListItem>
				</List>
				<Typography variant={'h6'} component={'h6'}>
					{'부 칙'}
				</Typography>
				<List>
					<ListItem>
						{'이 개인정보처리방침은 2020년 2월 23일부터 적용되며, 개인정보처리방침 내용에 변경이 있을 경우 개정 최소 7일전, 회원의 권리에 중대한 변경이 발생할 경우에는 최소 30일전에 개념글 저장소 홈페이지를 통해 고지합니다.'}
					</ListItem>
				</List>
			</Container>
		</>
	);
}

export default Privacy;
