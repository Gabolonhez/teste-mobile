export const queryKeys = {
  health: ['health'] as const,
  user: (userId: number) => ['user', userId] as const,
} as const;
