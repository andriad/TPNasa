export type Galaxy = {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string
    service_version: string
    title: string;
    url: string;
}

export type RootStackParamList = {
    ZoomScreen: {galaxy: Galaxy};
    GalaxyCard: undefined;
    MainScreen: undefined;
}