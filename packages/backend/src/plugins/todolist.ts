import { IdentityClient } from '@backstage/plugin-auth-node';
import { createRouter } from '@internal/plugin-todo-list-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';

export default async function createPlugin({
  logger,
  discovery,
  permissions,
}: PluginEnvironment): Promise<Router> {
  return await createRouter({
    logger,
    identity: IdentityClient.create({
      discovery,
      issuer: await discovery.getExternalBaseUrl('auth'),
    }),
    permissions,
  });
}
