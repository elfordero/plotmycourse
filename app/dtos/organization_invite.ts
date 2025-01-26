import { BaseModelDto } from '@adocasts.com/dto/base'
import OrganizationInvite from '#models/organization_invite'
import OrganizationDto from '#dtos/organization'
import UserDto from '#dtos/user'
import RoleDto from '#dtos/role'

export default class OrganizationInviteDto extends BaseModelDto {
  declare id: number
  declare invitedByserId: number
  declare canceledByUserId: number | null
  declare roleId: number
  declare email: string
  declare acceptedAt: string | null
  declare canceledAt: string | null
  declare createdAt: string
  declare updatedAt: string
  declare invitedByIUser: UserDto | null
  declare canceledByUser: UserDto | null
  declare role: RoleDto | null

  declare organizationId: number
  declare organization: OrganizationDto | null

  constructor(organizationInvite?: OrganizationInvite) {
    super()

    if (!organizationInvite) return
    this.id = organizationInvite.id
    this.invitedByserId = organizationInvite.invitedByserId
    this.canceledByUserId = organizationInvite.canceledByUserId
    this.roleId = organizationInvite.roleId
    this.email = organizationInvite.email
    this.acceptedAt = organizationInvite.acceptedAt?.toISO()!
    this.canceledAt = organizationInvite.canceledAt?.toISO()!
    this.createdAt = organizationInvite.createdAt.toISO()!
    this.updatedAt = organizationInvite.updatedAt.toISO()!
    this.invitedByIUser =
      organizationInvite.invitedByIUser && new UserDto(organizationInvite.invitedByIUser)
    this.canceledByUser =
      organizationInvite.canceledByUser && new UserDto(organizationInvite.canceledByUser)
    this.role = organizationInvite.role && new RoleDto(organizationInvite.role)

    this.organizationId = organizationInvite.organizationId
    this.organization =
      organizationInvite.organization && new OrganizationDto(organizationInvite.organization)
  }
}
