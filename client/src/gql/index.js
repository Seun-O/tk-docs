import { gql } from 'apollo-boost';

export const GET_TRACK = gql`
	query track($where: TrackWhereUniqueInput!) {
		track(where: $where) {
			id
			name
			description
			sprints {
				id
				name
				description
				modules {
					id
					name
					description
					lessons {
						id
						name
					}
				}
			}
		}
	}
`;
export const GET_SPRINT = gql`
	query sprint($where: SprintWhereUniqueInput!) {
		sprint(where: $where) {
			id
			name
			description
			modules {
				id
				name
				description
			}
		}
	}
`;

export const GET_TRACKS = gql`
	{
		tracks {
			id
			name
			description
		}
	}
`;
export const GET_SPRINTS = gql`
	{
		sprints {
			id
			name
		}
	}
`;
export const GET_MODULES = gql`
	{
		modules {
			id
			name
		}
	}
`;

export const GET_MODULE = gql`
	query module($where: ModuleWhereUniqueInput!) {
		module(where: $where) {
			id
			name
			description
			lessons {
				id
				name
				description
				objective
				details
			}
		}
	}
`;

export const GET_LESSON = gql`
	query lesson($where: LessonWhereUniqueInput!) {
		lesson(where: $where) {
			id
			name
			description
			objective
			details
		}
	}
`;

export const CREATE_TRACK = gql`
	mutation createTrack($data: TrackCreateInput!) {
		createTrack(data: $data) {
			id
			name
		}
	}
`;
export const CREATE_SPRINT = gql`
	mutation createSprint($data: SprintCreateInput!) {
		createSprint(data: $data) {
			id
			name
		}
	}
`;

export const CREATE_MODULE = gql`
	mutation createModule($data: ModuleCreateInput!) {
		createModule(data: $data) {
			id
			name
		}
	}
`;

export const CREATE_LESSON = gql`
	mutation createLesson($data: LessonCreateInput!) {
		createLesson(data: $data) {
			id
			name
		}
	}
`;

// ****GraphQL Delete Mutations ****
export const DELETE_TRACK = gql`
	mutation deleteTrack($where: TrackWhereUniqueInput!) {
		deleteTrack(where: $where) {
			id
			name
		}
	}
`;
export const DELETE_SPRINT = gql`
	mutation deleteSprint($where: SprintWhereUniqueInput!) {
		deleteSprint(where: $where) {
			id
			name
		}
	}
`;
export const DELETE_MODULE = gql`
	mutation deleteModule($where: ModuleWhereUniqueInput!) {
		deleteModule(where: $where) {
			id
			name
		}
	}
`;
export const DELETE_LESSON = gql`
	mutation deleteLesson($where: LessonWhereUniqueInput!) {
		deleteLesson(where: $where) {
			id
			name
		}
	}
`;
//**** Delete Mutations End****

// **** Update Mutation Start ****
export const UPDATE_TRACK = gql`
	mutation updateTrack(
		$where: TrackWhereUniqueInput!
		$data: TrackUpdateInput!
	) {
		updateTrack(where: $where, data: $data) {
			id
			name
		}
	}
`;
export const UPDATE_SPRINT = gql`
	mutation updateSprint(
		$where: SprintWhereUniqueInput!
		$data: SprintUpdateInput!
	) {
		updateSprint(where: $where, data: $data) {
			id
			name
		}
	}
`;
export const UPDATE_MODULE = gql`
	mutation updateModule(
		$where: ModuleWhereUniqueInput!
		$data: ModuleUpdateInput!
	) {
		updateModule(where: $where, data: $data) {
			id
			name
		}
	}
`;
export const UPDATE_LESSON = gql`
	mutation updateLesson(
		$where: LessonWhereUniqueInput!
		$data: LessonUpdateInput!
	) {
		updateLesson(where: $where, data: $data) {
			id
			name
		}
	}
`;
// **** Update Mutation End ****
