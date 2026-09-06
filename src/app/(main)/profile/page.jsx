import { getBookmarkByEmail } from '@/lib/api/bookmark';
import { getPromptsByEmail } from '@/lib/api/prompts';
import { getAllReports } from '@/lib/api/reports';
import { getAllReviews, getReviewsByEmail } from '@/lib/api/review';
import { getAllSubscriptions } from '@/lib/api/subscriptions';
import { getAllUserAddPrompts, getUserAddPrompts } from '@/lib/api/userAddPrompts';
import { getUsers } from '@/lib/api/users';
import { getUserSession } from '@/lib/core/session';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import {
    FiActivity,
    FiArrowRight,
    FiBookmark,
    FiCheckCircle,
    FiCreditCard,
    FiFileText,
    FiGrid,
    FiLayers,
    FiMail,
    FiMessageSquare,
    FiShield,
    FiUser,
    FiUsers,
    FiZap,
} from 'react-icons/fi';

const asArray = (data) => (Array.isArray(data) ? data : data?.prompts || data?.data || []);

const roleContent = {
  user: {
    eyebrow: 'Member workspace',
    title: 'Your PromptAI profile',
    description:
      'Keep track of your saved ideas, community activity, and prompt-building progress.',
    accent: 'from-violet-500 to-indigo-500',
    accentText: 'text-violet-300',
    quickLinks: [
      { label: 'Open dashboard', href: '/dashboard/user/overview', icon: FiGrid },
      { label: 'Saved prompts', href: '/dashboard/user/saved-prompts', icon: FiBookmark },
      { label: 'Create prompt', href: '/dashboard/user/add-prompt', icon: FiZap },
    ],
  },
  creator: {
    eyebrow: 'Creator workspace',
    title: 'Your creator profile',
    description:
      'Review the impact of your published work and continue building the PromptAI catalog.',
    accent: 'from-teal-500 to-emerald-500',
    accentText: 'text-teal-300',
    quickLinks: [
      { label: 'View analytics', href: '/dashboard/creator/analytics', icon: FiActivity },
      { label: 'Manage prompts', href: '/dashboard/creator/my-prompts', icon: FiLayers },
      { label: 'Create prompt', href: '/dashboard/creator/add-prompt', icon: FiZap },
    ],
  },
  admin: {
    eyebrow: 'Platform operations',
    title: 'Your administrator profile',
    description:
      'Monitor platform health, moderation activity, and the community you help support.',
    accent: 'from-rose-500 to-orange-500',
    accentText: 'text-rose-300',
    quickLinks: [
      { label: 'Manage users', href: '/dashboard/admin/all-users', icon: FiUsers },
      { label: 'Moderation queue', href: '/dashboard/admin/reported-prompts', icon: FiShield },
      { label: 'Platform analytics', href: '/dashboard/admin/analytics', icon: FiActivity },
    ],
  },
};

const buildUserMetrics = async (user) => {
  const [prompts, bookmarks, reviews] = await Promise.all([
    getPromptsByEmail(user.email),
    getBookmarkByEmail(user.email),
    getReviewsByEmail(user.email),
  ]);

  const promptList = asArray(prompts);
  const bookmarkList = asArray(bookmarks);
  const reviewList = asArray(reviews);

  return {
    metrics: [
      {
        label: 'Contributions',
        value: promptList.length,
        icon: FiFileText,
        color: 'text-sky-300 bg-sky-500/10',
      },
      {
        label: 'Saved prompts',
        value: bookmarkList.length,
        icon: FiBookmark,
        color: 'text-violet-300 bg-violet-500/10',
      },
      {
        label: 'Community reviews',
        value: reviewList.length,
        icon: FiMessageSquare,
        color: 'text-amber-300 bg-amber-500/10',
      },
    ],
    activityTitle: 'Your member activity',
    activityItems: [
      { label: 'Prompts contributed', value: promptList.length },
      { label: 'Ideas saved to your vault', value: bookmarkList.length },
      { label: 'Reviews shared with creators', value: reviewList.length },
    ],
  };
};

const buildCreatorMetrics = async (user) => {
  const prompts = asArray(await getUserAddPrompts(user.email));
  const totalCopies = prompts.reduce(
    (total, prompt) => total + (Number(prompt.copyCount) || 0),
    0,
  );
  const totalBookmarks = prompts.reduce(
    (total, prompt) => total + (Number(prompt.bookmarkCount) || 0),
    0,
  );

  return {
    metrics: [
      {
        label: 'Published prompts',
        value: prompts.length,
        icon: FiLayers,
        color: 'text-teal-300 bg-teal-500/10',
      },
      {
        label: 'Total copies',
        value: totalCopies,
        icon: FiFileText,
        color: 'text-emerald-300 bg-emerald-500/10',
      },
      {
        label: 'Prompt bookmarks',
        value: totalBookmarks,
        icon: FiBookmark,
        color: 'text-amber-300 bg-amber-500/10',
      },
    ],
    activityTitle: 'Your creator impact',
    activityItems: [
      { label: 'Prompt catalog size', value: prompts.length },
      { label: 'Times your work was copied', value: totalCopies },
      { label: 'Bookmarks earned', value: totalBookmarks },
    ],
  };
};

const buildAdminMetrics = async () => {
  const [users, prompts, reports, subscriptions, reviews] = await Promise.all([
    getUsers(),
    getAllUserAddPrompts(),
    getAllReports(),
    getAllSubscriptions(),
    getAllReviews(),
  ]);

  const userList = asArray(users);
  const promptList = asArray(prompts);
  const reportList = asArray(reports);
  const subscriptionList = asArray(subscriptions);
  const reviewList = asArray(reviews);

  return {
    metrics: [
      {
        label: 'Platform users',
        value: userList.length,
        icon: FiUsers,
        color: 'text-sky-300 bg-sky-500/10',
      },
      {
        label: 'Prompt submissions',
        value: promptList.length,
        icon: FiLayers,
        color: 'text-emerald-300 bg-emerald-500/10',
      },
      {
        label: 'Open reports',
        value: reportList.length,
        icon: FiShield,
        color: 'text-rose-300 bg-rose-500/10',
      },
    ],
    activityTitle: 'Platform snapshot',
    activityItems: [
      { label: 'Active subscriptions recorded', value: subscriptionList.length },
      { label: 'Community reviews received', value: reviewList.length },
      { label: 'Reports awaiting moderation', value: reportList.length },
    ],
  };
};

const getInitials = (name) =>
  name
    ?.split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'PA';

const ProfilePage = async () => {
  const user = await getUserSession();

  if (!user) redirect('/sign-in');

  const role = roleContent[user.role] ? user.role : 'user';
  const content = roleContent[role];
  const profileData =
    role === 'admin'
      ? await buildAdminMetrics()
      : role === 'creator'
        ? await buildCreatorMetrics(user)
        : await buildUserMetrics(user);
  const isPremium = user.plan?.toLowerCase() === 'premium';
  const initials = getInitials(user.name);

  return (
    <div className="profile-page min-h-screen bg-[#0b0f19] px-4 pb-16 pt-36 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section
          className={`profile-hero relative overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-br ${content.accent} p-[1px] shadow-2xl`}
        >
          <div className="profile-hero-surface relative rounded-[23px] bg-[#101722]/95 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/10 text-2xl font-black text-white shadow-xl">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || 'Profile image'}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    initials
                  )}
                </div>

                <div>
                  <span className={`text-xs font-bold uppercase tracking-[0.18em] ${content.accentText}`}>
                    {content.eyebrow}
                  </span>
                  <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {content.title}
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                    {content.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <span className="inline-flex items-center gap-2 rounded-xl border border-slate-600/70 bg-slate-900/60 px-3 py-2 text-xs font-semibold capitalize text-slate-200">
                  <FiUser />
                  {role}
                </span>
                <span
                  className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold ${
                    isPremium
                      ? 'border-amber-400/30 bg-amber-400/10 text-amber-200'
                      : 'border-slate-600/70 bg-slate-900/60 text-slate-300'
                  }`}
                >
                  <FiZap />
                  {isPremium ? 'Premium access' : 'Free access'}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {profileData.metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <article
                key={metric.label}
                className="profile-metric flex items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-900/40 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-xl"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-white">
                    {metric.value.toLocaleString()}
                  </p>
                </div>
                <span className={`rounded-xl p-3 ${metric.color}`}>
                  <Icon size={21} />
                </span>
              </article>
            );
          })}
        </section>

        <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <article className="profile-panel rounded-2xl border border-slate-800/70 bg-slate-900/35 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl sm:p-7">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-indigo-500/10 p-2.5 text-indigo-300">
                  <FiActivity size={20} />
                </span>
                <div>
                  <h2 className="font-bold text-white">{profileData.activityTitle}</h2>
                  <p className="mt-0.5 text-sm text-slate-400">
                    Live data from your PromptAI workspace.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {profileData.activityItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-800/60 bg-[#0b0f19]/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80"
                  >
                    <p className="text-xs leading-relaxed text-slate-400">{item.label}</p>
                    <p className="mt-2 text-xl font-bold text-white">
                      {item.value.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="profile-panel rounded-2xl border border-slate-800/70 bg-slate-900/35 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Quick workspace access
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {content.quickLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group rounded-xl border border-slate-800/70 bg-[#0b0f19]/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800/60 hover:shadow-lg"
                    >
                      <Icon className={content.accentText} size={19} />
                      <p className="mt-5 flex items-center justify-between text-sm font-semibold text-slate-200">
                        {link.label}
                        <FiArrowRight
                          className="transition-transform group-hover:translate-x-1"
                          size={15}
                        />
                      </p>
                    </Link>
                  );
                })}
              </div>
            </article>
          </div>

          <aside className="profile-panel rounded-2xl border border-slate-800/70 bg-slate-900/35 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl">
            <h2 className="flex items-center gap-2 font-bold text-white">
              <FiShield className="text-emerald-300" />
              Account details
            </h2>

            <dl className="mt-6 space-y-4 text-sm">
              <div className="border-b border-slate-800/60 pb-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Name
                </dt>
                <dd className="mt-1 font-medium text-slate-200">
                  {user.name || 'PromptAI member'}
                </dd>
              </div>

              <div className="border-b border-slate-800/60 pb-4">
                <dt className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <FiMail size={12} />
                  Email
                </dt>
                <dd className="mt-1 break-all font-medium text-slate-200">{user.email}</dd>
              </div>

              <div className="border-b border-slate-800/60 pb-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Account role
                </dt>
                <dd className="mt-1 capitalize text-slate-200">{role}</dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Subscription
                </dt>
                <dd className="mt-1 flex items-center gap-2 font-medium text-slate-200">
                  <FiCreditCard
                    size={14}
                    className={isPremium ? 'text-amber-300' : 'text-slate-500'}
                  />
                  {isPremium ? 'Premium lifetime access' : 'Free plan'}
                </dd>
              </div>
            </dl>

            {!isPremium && (
              <Link
                href="/pricing"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
              >
                <FiCheckCircle />
                Upgrade to Premium
              </Link>
            )}
          </aside>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;