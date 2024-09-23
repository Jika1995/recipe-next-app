import WelcomeModal from "./WelcomeModal";

export const modals = {
  welcomeModal: WelcomeModal
} as const;

declare module '@mantine/modals' {
  export interface MantineModalsOverride {
    modals: typeof modals;
  }
}