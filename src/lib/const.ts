export type Client = {
  key: string,
  name: string,
  imgsrc: string,
  url: {
    default: string,
    npub?: string,
    nprofile?: string,
    note?: string,
    nevent?: string,
  }
  nip05: boolean,
  smartphone: boolean,
}

export const clients: Client[] = [
  {
    key: "apps",
    name: 'アプリで開く',
    imgsrc: '/image/app_icon.svg',
    url: {
      default: 'nostr:'
    },
    nip05: false,
    smartphone: false,
  },
  {
    key: "nostter",
    name: 'nostter',
    imgsrc: '/image/nostter.png',
    url: {
      default: 'https://nostter.app/'
    },
    nip05: false,
    smartphone: false,
  },
  {
    key: "primal",
    name: 'Primal',
    imgsrc: '/image/iris.png',
    url: {
      default: "",
      npub: "",
      note: 'https://primal.net/e/',
      nevent: 'https://primal.net/e/',
    },
    nip05: true,
    smartphone: false,
  },
  {
    key: "iris",
    name: 'Iris',
    imgsrc: '/image/iris.png',
    url: {
      default: 'https://iris.to/'
    },
    nip05: true,
    smartphone: false,
  },
  {
    key: "snort",
    name: 'Snort',
    imgsrc: '/image/snort.png',
    url: {
      default: 'https://snort.social/'
    },
    nip05: false,
    smartphone: false,
  },
]
