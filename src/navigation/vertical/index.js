import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'BlockChains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'ChromeIcon',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Website Service',
      href: 'https://service.sychonix.me/',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Website',
      href: 'https://me.jesspoex.xyz',
      icon: 'ChromeIcon',
    })
  }
  chainMenus.push({
    title: 'Discord',
    href: 'https://discordapp.com/users/692084394327801887',
    icon: 'MessageSquareIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/jesspoex',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/jesspoex',
    icon: 'GithubIcon',
  })

  return chainMenus
}

export default processMenu()
